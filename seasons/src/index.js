import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return (
    <div>
      <SeasonDisplay />
      <h1>Hello there!</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
