import React, { useState } from "react";
import "../App.css";

const Checklist = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setText] = useState("");
  const [items, setItems] = useState([{ id: 1, text: "Item 1" }]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
    console.log("Typed text:", e.target.value);
  };

  const createNewListItem = () => {
    const newListItem = "";
    setItems([...items, newListItem]);
  };

  return (
    <div>
      <ul className="checkList">
        {items.map((item, index) => (
          <li key={index} className={isEditing ? "editable" : ""} onClick={handleClick}>
            {isEditing ? (
              <input
                id={`editInput-${index}`}
                type="text"
                value={inputText}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ) : (
              item
            )}
          </li>
        ))}

        <li className="addCheckListItem" onClick={createNewListItem}>
          +
        </li>
      </ul>
    </div>
  );
};

export default Checklist;
