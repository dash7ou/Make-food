import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APPID = "715ccf54";
  const APPKEY = "43ebd5b10e8c6ffe2469e8f916d26117";
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APPID}&app_key=${APPKEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
};

export default App;
