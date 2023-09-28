import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import {
  TileLayer,
  MapContainer,
  Polyline,
  Marker,
  useMap,
  Popup,
} from "react-leaflet";

import React, { useState } from "react";
import L from "leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import SearchMenu from "../SearchMenu/SearchMenu";
import classes from "../Main.module.scss";
import Basemap from "./Basemap";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

export const basemapsDict = {
  osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
  dark: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
  cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
};

const MapComponent = () => {
  let z = 10;
  // const coordinates = useSelector(
  //   (state: RootState) => state.routesReducer.coordinates
  // );
  // const mainPoints = useSelector(
  //   (state: RootState) => state.routesReducer.mainPoints
  // );
  // const currentRoute = useSelector(
  //   (state: RootState) => state.routesReducer.currentRoute
  // );
  // const center = useSelector((state: RootState) => state.routesReducer.center);
  // useEffect(() => console.log(center), [currentRoute]);

  const [basemap, setBasemap] = useState<string>(basemapsDict.osm);
  const onBMChange = (bm: string) => {
    setBasemap(bm);
  };
  return (
    <div>
      <Basemap onChange={onBMChange} />
      <MapContainer
        center={[51, 0]}
        zoom={13}
        zoomControl={false}
        // scrollWheelZoom={false}
      >
        {/*<ChangeView center={[50, 20]} zoom={10} />*/}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={basemap}
        />
        <SearchMenu provider={new OpenStreetMapProvider()} />
        <Marker position={[51, 0]}>
          <Popup>тут крутые ебеня</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

// @ts-ignore
export default MapComponent;
