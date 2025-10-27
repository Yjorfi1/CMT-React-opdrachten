import { useState } from "react";
import "./App.css";
import menuData from "./data.js";
import  "./components/Menu.jsx";
import MenuList from "./components/MenuList";

function App() {

  return (
    <>
      <h1>Opdracht 4 - Menu</h1>
    <MenuList/>
    </>
  );
}

export default App;