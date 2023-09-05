import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl } from "leaflet-geosearch";
import classes from "./SearchMenu.module.scss";

type SearchProps = {
  provider: any;
};

const Search: React.FC<SearchProps> = ({ provider }) => {
  const map = useMap();

  // @ts-ignore
  useEffect(() => {
    // @ts-ignore
    const searchControl = new GeoSearchControl({
      provider,
    });
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [provider, map]);

  return null;
};

const SearchMenu: React.FC<SearchProps> = ({ provider }) => {
  return (
    <div className={classes.container}>
      {/*<div className={classes.search}>*/}
      <Search provider={provider} />
      {/*</div>*/}
    </div>
  );
};

export default SearchMenu;
