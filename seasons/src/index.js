import React from "react";
import ReactDOM, { render } from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called set.State to update state of the lat object.
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    } if (!this.state.errormessage && this.state.lat){
      return <div>Lat: {this.state.lat}</div>
    } else {
      return <div>Loading!</div>
    }
    
    
    
    
      // <div>
      //   Latitude: {this.state.lat}
      //   <br />
      //   Error: {this.state.errorMessage}
      // </div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
