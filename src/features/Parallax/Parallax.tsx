import clsx from "clsx";
import React from "react";
import classes from "./Parallax.module.scss";

const Parallax = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>Parallax</h2>
      </div>
      <div className={clsx(classes.layer, classes.space)} />
      <div className={clsx(classes.layer, classes.planet)} />
    </div>
  );
};
export default Parallax;
