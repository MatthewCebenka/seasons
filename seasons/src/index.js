import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
  return (
    <div>
      <SeasonDisplay />
      <h1>Hello there!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
