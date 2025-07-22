import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chat from "./components/chat";
import logo from "./assets/img/logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img src={logo} className="logo" alt="Vite logo" />
      <Chat />
    </>
  );
}

export default App;
