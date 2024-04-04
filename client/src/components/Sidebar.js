import React from "react";
import "../App.css"

const Sidebar = () => {
  const listItemOnClick = (event) => {
    let listItem = event.target

    let cloneItem = listItem.cloneNode(true);

    listItem.parentNode.insertBefore(cloneItem, listItem.nextSibling)
}
  return (
    <nav>
      <div className="sidebar">
        <button type="button" className="logoDiv">
      <img src="/checkmateLogo1.png" className="checkLogo" alt="" />
      </button>
      <ul className="nav flex-column">
        <li className="nav-item firstItem" onclick={listItemOnClick()}>+</li>
      </ul>
      </div>
    </nav>
  );

};

export default Sidebar;
