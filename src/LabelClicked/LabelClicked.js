import React from "react";
import { IsClickedContext } from "../App";

export const LabelClicked = () => {
  return (
    <IsClickedContext.Consumer>
      {(isClicked) => (
        <p>
          <strong>{isClicked ? "Yes" : "No"}</strong>
        </p>
      )}
    </IsClickedContext.Consumer>
  );
};

export default LabelClicked;
