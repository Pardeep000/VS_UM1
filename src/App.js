import "./App.css";
//
import { useState } from "react";
import TopBar from "./Components/TopBar";
// import UserContainer from "./Components/UserContainer";
//

function App() {
  const [mode, setMode] = useState("dark");
  let changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="container">
        <TopBar mode={mode} changeMode={changeMode} />
      </div>
    </>
  );
}

export default App;
