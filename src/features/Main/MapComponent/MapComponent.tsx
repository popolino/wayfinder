import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import {
  TileLayer,
  MapContainer,
  Polyline,
  Marker,
  useMap,
} from "react-leaflet";

import React, { useEffect } from "react";
import { Popup } from "leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import SearchMenu from "../SearchMenu/SearchMenu";
import classes from "../Main.module.scss";

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

  const position = [51.505, -0.09];
  return (
    <div>
      <MapContainer
        center={[51, 0]}
        zoom={13}
        zoomControl={false}
        // scrollWheelZoom={false}
      >
        {/*<ChangeView center={[50, 20]} zoom={10} />*/}

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SearchMenu provider={new OpenStreetMapProvider()} />

        <Marker position={[51, 0]}></Marker>
      </MapContainer>
    </div>
  );
};

// @ts-ignore
export default MapComponent;
