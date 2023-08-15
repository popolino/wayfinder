import clsx from "clsx";
import React from "react";
import classes from "./Parallax.module.scss";
import SvgSelector from "../../components/svgSelector/SvgSelector";

const Parallax = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h2>Welcome to Wayfinder!</h2>
        <div className={classes.search}>
          <input placeholder="Find a place..." />
          <SvgSelector id="search" />
        </div>
      </div>
      <div className={clsx(classes.layer, classes.space)} />
      <div className={clsx(classes.layer, classes.planet)} />
    </div>
  );
};
export default Parallax;
