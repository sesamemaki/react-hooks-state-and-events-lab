import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState();

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      {!selectedCategory ? (
        <ul className="Items">
          {items.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      ) : (
        <ul className="Items">
          {items
            .filter((item) => item.category === selectedCategory)
            .map((element) => {
              return (
                <Item
                  key={element.id}
                  name={element.name}
                  category={element.category}
                />
              );
            })}
        </ul>
      )}
    </div>
  );
}

export default ShoppingList;
