import React from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";
import Car from "./Car/Car";

export const IsClickedContext = React.createContext(false);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [
        { name: "Ferrari", year: 2020 },
        { name: "BMW", year: 2018 },
        { name: "Tesla", year: 2013 },
      ],
      pageTitle: "React component",
      isCarsShown: false,
      isClicked: false,
    };
  }

  toggleVisible = () => {
    this.setState({
      isCarsShown: !this.state.isCarsShown,
    });
  };

  changeNameHandler = (newName, index) => {
    const car = this.state.cars[index];
    car.name = newName;
    const cars = [...this.state.cars];
    cars[index] = car;

    this.setState({ cars });
  };

  deleteCarHandler = (index) => {
    const cars = this.state.cars;
    cars.splice(index, 1);
    this.setState({ cars });
  };

  changePageTitle = (pageTitle) => {
    this.setState({ pageTitle });
  };

  render() {
    const { isCarsShown } = this.state;

    let cars = null;

    if (isCarsShown) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={`car-${index}`}>
            <Car
              index={index}
              name={car.name}
              year={car.year}
              changeTitle={this.changePageTitle}
              onDelete={() => this.deleteCarHandler(index)}
              changeName={(newName) => this.changeNameHandler(newName, index)}
            />
          </ErrorBoundary>
        );
      });
    }
    return (
      <div style={{ textAlign: "center", color: "#444" }}>
        <h1>{this.props.title}</h1>
        <IsClickedContext.Provider value={this.state.isClicked}>
          <Counter />
        </IsClickedContext.Provider>
        <hr />

        <button onClick={() => this.setState({ isClicked: true })}>
          Change click
        </button>

        <button onClick={this.toggleVisible}>Toggle cars visible</button>
        {cars}
      </div>
    );
  }
}

export default App;
