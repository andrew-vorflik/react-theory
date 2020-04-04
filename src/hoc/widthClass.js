import React from "react";

export const widthCass = (Component, className) => {
  return (props) => {
    return (
      <div className={className}>
        <Component {...props} />
      </div>
    );
  };
};

export default widthCass;
