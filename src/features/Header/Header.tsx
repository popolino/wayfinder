import React from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/img/logo.png";

const Header: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={classes["main-container"]}>
        <a href="">Services</a>
        <a href="">GPS</a>
        <a href="">About Us</a>
      </div>
      <div className={classes["right-container"]}>
        <button>Login</button>
        <a href="">Registration</a>
      </div>
    </div>
  );
};

export default Header;
