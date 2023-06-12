import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mode, setMode] = useState(false);
  const [text, setText] = useState(false);

  const handleModeAndButtonText = () => {
    setMode((mode) => !mode);
    setText((text) => !text);
  };

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ? "App dark" : "App light";
  const button = text ? "Light Mode" : "Dark Mode";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeAndButtonText}>{button}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
