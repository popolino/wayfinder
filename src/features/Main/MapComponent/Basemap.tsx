import React from "react";
import classes from "./MapComponent.module.scss";
import { basemapsDict } from "./MapComponent";
import { Select } from "antd";

type TBasemapProps = {
  onChange: (bm: string) => void;
};

const Basemap: React.FC<TBasemapProps> = ({ onChange }) => {
  const handleChange = (value: string) => {
    onChange(value);
  };
  return (
    <div className={classes["basemaps-container"]}>
      <Select
        autoFocus={false}
        defaultValue="OSM"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: basemapsDict.osm, label: "OSM" },
          { value: basemapsDict.hot, label: "HOT" },
          { value: basemapsDict.dark, label: "DARK" },
          { value: basemapsDict.cycle, label: "CYCLE" },
        ]}
      />
    </div>
  );
};

export default Basemap;
