import React from "react";
import Auxillary from "../hoc/Auxillary";
import LabelClicked from "../LabelClicked/LabelClicked";

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  counterPlus = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };

  counterMinus = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <Auxillary>
        <h2 key={"1"}>Counter {this.state.counter}</h2>
        <button key={"2"} onClick={this.counterPlus}>
          {" "}
          +{" "}
        </button>
        <button key={"3"} onClick={this.counterMinus}>
          {" "}
          -{" "}
        </button>
        <LabelClicked />
      </Auxillary>
    );
  }
}
