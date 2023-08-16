import React from "react";
import classes from "./Main.module.scss";
import MapComponent from "./MapComponent/MapComponent";
import SearchMenu from "./SearchMenu/SearchMenu";
import { MapContainer } from "react-leaflet";

const Main = () => {
  return (
    <div className={classes.container}>
      <MapComponent />
    </div>
  );
};

export default Main;
