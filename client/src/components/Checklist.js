import React, { useState, useEffect, useRef } from "react";
import "../App.css";

// ChatGPT contributed significantly to this code

// sets up checklist shell
const Checklist = () => {
  const [editItemId, setEditItemId] = useState(null);
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([
    { id: "0", text: "", checked: false, subItems: [] },
  ]);
  const inputRef = useRef(null);

  // removes text input box when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        whenClickedAway();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //opens text input box when clicked on
  const whenClickedOn = (id, event) => {
    if (event.target.tagName === "INPUT") return;
    if (editItemId === id) {
      return;
    }
    setEditItemId(id);
  };

  const whenClickedAway = () => {
    setEditItemId(null);
  };

  // sets text in input box to new text and accounts for sub items if necessary
  const updateText = (id, newText, parentId = null) => {
    if (parentId === null) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, text: newText } : item
        )
      );
    } else {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === parentId
            ? {
                ...item,
                subItems: item.subItems.map((subItem) =>
                  subItem.id === id ? { ...subItem, text: newText } : subItem
                ),
              }
            : item
        )
      );
    }
  };

  // switches the checkmark state of an item
  const toggleChecked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const createNewListItem = () => {
    const newListItem = {
      id: items.length + 1,
      text: inputText,
      checked: false,
      subItems: [],
    };
    setItems([...items, newListItem]);
    setInputText("");
    setEditItemId(newListItem.id);
  };


  const generateSubItemId = (parentId, subItemCount) => {
    return `${parentId}${subItemCount}`;
  };

  const createNewSubItem = (parentId) => {
    setItems((prevItems) => {
      // find index of parent item in array
      const parentItemIndex = prevItems.findIndex(
        (item) => item.id === parentId
      );
      if (parentItemIndex !== -1) {

        // create child id if found
        const itemCount = prevItems[parentItemIndex].subItems.length + 1
        const subItemId = generateSubItemId(parentId, itemCount)

        // characteristics of new sub item
        const newSubItem = {
          id: subItemId,
          text: inputText,
          checked: false,
        }
        // new array for sub items attached to parent item
        const updatedItems = [...prevItems];
        updatedItems[parentItemIndex].subItems.push(newSubItem);
        setInputText("");
        setEditItemId(newSubItem.id);
        return updatedItems;
      }
      // return unchanged array if unfound
      return prevItems;
    });
  };

  return (
    <div>
      <ol className="checkList">
        {items.map((item) => (
          <li
            className="mainListItem"
            key={item.id}
            onClick={(event) => whenClickedOn(item.id, event)}
          >
            <input
              type="checkbox"
              className="checkBox"
              checked={item.checked}
              onChange={() => toggleChecked(item.id)}
            />
            {editItemId === item.id ? (
              <input
                type="text"
                value={item.text}
                onChange={(e) => updateText(item.id, e.target.value)}
                onBlur={whenClickedAway}
                ref={inputRef}
              />
            ) : (
              <span
                className={item.checked ? "checkedItem" : ""}
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.text || "Add Item"}
              </span>
            )}
            <ul>
              {item.subItems.map((subItem) => (
                <li key={subItem.id}>{subItem.text}</li>
              ))}
              <li className="addSubItem">
                <button
                  className="addSubItemButton"
                  onClick={() => createNewSubItem(item.id)}
                >
                  Add Sub Item
                </button>
              </li>
            </ul>
            {!editItemId || editItemId !== item.id ? "" : null}
          </li>
        ))}

        <li className="addItem">
          <button className="addItemButton" onClick={createNewListItem}>
            +
          </button>
        </li>
      </ol>
    </div>
  );
};

export default Checklist;
