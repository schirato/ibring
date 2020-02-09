import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Button } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="primary" className="mr-2">
          Primary
        </Button>
      </header>
    </div>
  );
};

export default App;