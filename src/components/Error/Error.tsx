import classes from "./Error.module.css";
import React from "react";

interface ErrorInterface {
  cod?: string;
  message: string;
}

interface ErrorProps {
  error: ErrorInterface;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className={classes.ErrorContainer}>
      <div className={classes.Title}>
        We are really sorry to say that but something went wrong
      </div>
      <div className={classes.Description}>
        We think the problem is {error.message}
      </div>
    </div>
  );
};

export default Error;
