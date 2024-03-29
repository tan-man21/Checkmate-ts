import React, { useState, useEffect, useRef } from "react";
import "../App.css";

const Checklist = () => {
  const [editItemId, setEditItemId] = useState(null);
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([{ id: 1, text: "Item", checked: false }]);
  const inputRef = useRef(null);

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

  const whenClickedOn = (id) => {
    if (editItemId === id) {
      return;
    }
    setEditItemId(id);
  };

  const whenClickedAway = () => {
    setEditItemId(null);
  };

  const updateText = (id, newText) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  const toggleChecked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const createNewListItem = () => {
    const newListItem = { id: items.length + 1, text: inputText };
    setItems([...items, newListItem]);
    setInputText("");
    setEditItemId(newListItem.id);
  };

  return (
    <div>
      <ul className="checkList">
        {items.map((item) => (
          <li key={item.id} onClick={() => whenClickedOn(item.id)}>
            <input 
            type="checkbox"
            checked={item.checked}
            onChange={() => toggleChecked(item.id)}
            />
            {editItemId == item.id && (
              <input
                type="text"
                value={item.text}
                onChange={(e) => updateText(item.id, e.target.value)}
                onBlur={whenClickedAway}
                ref={inputRef}
              />
            )}
            {!editItemId || editItemId !== item.id ? item.text : null}
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
