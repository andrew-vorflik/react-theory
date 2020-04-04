import React from "react";
import widthClass from "../hoc/widthClass";
import classModule from "./Car.module.scss";
import PropTypes from "prop-types";

class Car extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.inputRef);

    if (this.props.index === 2) {
      this.inputRef.current.focus();
    }
  }

  render() {
    const { name, year, changeName, onDelete, changeTitle } = this.props;

    const classes = [classModule.input];

    if (name.length) {
      classes.push(classModule.green);
    } else {
      classes.push(classModule.red);
    }

    if (name.length > 4) {
      classes.push(classModule.bold);
    }

    return (
      <>
        <h3>Name: {name}</h3>
        <p>
          Year: <strong>{year}</strong>
        </p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={(event) => changeName(event.target.value)}
          value={name}
          className={classes.join(" ")}
        />
        <div>
          <button onClick={onDelete}>Delete</button>
        </div>
        <div>
          <button onClick={() => changeTitle(name)}>Change title</button>
        </div>
      </>
    );
  }
}

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  index: PropTypes.number,
  changeTitle: PropTypes.func,
  onDelete: PropTypes.func,
  changeName: PropTypes.func,
};

export default widthClass(Car, classModule.Car);
