import React, { useState } from "react";

function Item({ name, category }) {
  const [itemAdded, setItemAdded] = useState();
  const [className, setClassName] = useState();
  const [buttonColor, setbuttonColor] = useState();

  const buttonText = itemAdded ? "Remove From Cart" : "Add to Cart";
  const classNameText = className ? "in-cart" : "";
  const buttonClassName = buttonColor ? "remove" : "add";

  const handleItemAdd = () => {
    setItemAdded((itemAdded) => !itemAdded);
    setClassName((className) => !className);
    setbuttonColor((buttonClassName) => !buttonClassName);
    console.log("item added");
  };

  return (
    <li className={classNameText}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassName} onClick={handleItemAdd}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
