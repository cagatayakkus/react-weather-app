import React from "react";
import classes from "./WindDirection.module.css";

interface WindDirectionProps {
  deg: number;
}

const WindDirection: React.FC<WindDirectionProps> = ({ deg }) => {
  const inlineStyle = {
    transform: `rotate(${deg + 90}deg)`,
  };
  return (
    <div className={classes.Background}>
      <div className={classes.Tooltip}>{deg}</div>
      <div className={classes.Line} style={inlineStyle}>
        <div className={classes.LeftArrow}></div>
        <div className={classes.RightArrow}></div>
      </div>
    </div>
  );
};

export default WindDirection;
