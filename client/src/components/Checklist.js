import React, { useState, useEffect, useRef } from "react";
import "../App.css";

// **ChatGPT contributed significantly to this code**

// sets up checklist shell
const Checklist = () => {
  const [editItemId, setEditItemId] = useState(null);
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([
    { id: "1", text: "", checked: false, subItems: [] },
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

  // opens text input box when the input is clicked on
  const whenClickedOn = (id, event) => {
    if (event.target.tagName === "INPUT") return;
    if (editItemId === id) {
      return;
    }
    setEditItemId(id);
  };

  // sets input box to null(disappear) when clicked outside input
  const whenClickedAway = () => {
    setEditItemId(null);
  };

  // sets text in input box to new text
  const updateText = (id, newText) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
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

/* const sendDataToServer =  */

  return (
    <div>
      <ul className="checkList">
        {items.map((item) => (
          <li
            className="mainListItem"
            // sets the id key
            key={item.id}
            // opens textbox when clicked on
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

            {!editItemId || editItemId !== item.id ? "" : null}
          </li>
        ))}
        <li className="addItem">
          <button className="addItemButton" onClick={createNewListItem}>
            +
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Checklist;
