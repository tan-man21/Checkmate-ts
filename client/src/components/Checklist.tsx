import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import CheckmateBrand from "./newbrand.png";
import Navigation from "./Navigation";
import ListTasks from "./ListTasks";
import InputTasks from "./InputTasks";
import EditTasks from "./EditTasks";

// **ChatGPT contributed significantly to Nathan's code**

// sets up checklist shell
const Checklist = () => {
  const [editItemId, setEditItemId] = useState(null);
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([
    { id: 1, text: "", checked: false, subItems: [] },
  ]);
  const [listType, setListType] = useState("ul");
  const [nextId, setNextId] = useState(2);
  const inputRef = useRef(null);

  const toggleListType = () => {
    setListType(listType === "ul" ? "ol" : "ul");
  };

  // removes text input box when clicked outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (inputRef.current && !inputRef.current.contains(event.target)) {
  //       whenClickedAway();
  //     }
  //   };

  //   const handleKeyPress = (event) => {
  //     if (event.key === "Enter") {
  //       whenClickedAway();
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   document.addEventListener("keydown", handleKeyPress);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     document.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, []);

  // // opens text input box when the input is clicked on
  // const whenClickedOn = (id, event) => {
  //   if (event.target.tagName === "INPUT") return;
  //   if (editItemId === id) {
  //     return;
  //   }
  //   setEditItemId(id);
  // };

  // // sets input box to null(disappear) when clicked outside input
  // const whenClickedAway = () => {
  //   setEditItemId(null);
  // };

  // // sets text in input box to new text
  // const updateText = (id, newText) => {
  //   setItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, text: newText } : item
  //     )
  //   );
  // };

  // // switches the checkmark state of an item
  // const toggleChecked = (id) => {
  //   setItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, checked: !item.checked } : item
  //     )
  //   );
  // };

  // const createNewListItem = () => {
  //   const newListItem = {
  //     id: nextId,
  //     text: inputText,
  //     checked: false,
  //     subItems: [],
  //   };
  //   setItems([...items, newListItem]);
  //   setNextId(nextId + 1);
  //   setInputText("");
  //   setEditItemId(newListItem.id);
  // };

  // const deleteListItem = (id) => {
  //   setItems(items.filter((item) => item.id != id));
  // };

  return (
    <div>
      <div className="checkListDiv">
        {/* <button className="listTypeButton" onClick={toggleListType}>
          {listType === "ul" ? "Numbered" : "Bulleted"}
        </button>
        {listType === "ul" ? (
          <ul className="checkList">
            {items.map((item, index) => (
              <li
                className="mainListItem"
                // sets the id key
                key={item.id}
                // opens textbox when clicked on
                onClick={(event) => whenClickedOn(item.id, event)}
              >
                <div className="leftLiContent">
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
                      <div className="listContent">
                        {item.text || "Add Task"}
                      </div>
                    </span>
                  )}
                </div>
                <div className="rightLiContent">
                  {index > 0 && (
                    <button
                      className="deleteButton"
                      onClick={() => deleteListItem(item.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </li>
            ))}
            <li className="addItem">
              <button className="addItemButton" onClick={createNewListItem}>
                +
              </button>
            </li>
          </ul>
        ) : (
          <ol className="checkList">
            {items.map((item, index) => (
              <li
                className="mainListItem"
                // sets the id key
                key={item.id}
                // opens textbox when clicked on
                onClick={(event) => whenClickedOn(item.id, event)}
              >
                <div className="leftLiContent">
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
                      <div className="listContent">
                        {item.text || "Add Task"}
                      </div>
                    </span>
                  )}
                </div>
                <div className="rightLiContent">
                  {index > 0 && (
                    <button
                      className="deleteButton"
                      onClick={() => deleteListItem(item.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </li>
            ))}
            <li className="addItem">
              <button className="addItemButton" onClick={createNewListItem}>
                +
              </button> */}
            {/* </li>
          </ol> */}
        {/* )} */}
      {/* Josh's code */}
      <Navigation />
      {/* Tanner's code */}
      <InputTasks />
      <ListTasks />
      </div>
    </div>
  );
};

export default Checklist;
