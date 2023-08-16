import React from "react";
import classes from "./Description.module.scss";

const Description = () => {
  return (
    <div className={classes.container}>
      <h2>What Does Wayfinder Do?</h2>
      <p>
        Wayfinder helps you find any location and gives you directions for
        walking, biking or driving
      </p>
    </div>
  );
};

export default Description;
