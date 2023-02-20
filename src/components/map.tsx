import React, { useCallback, useRef, useState, forwardRef } from "react";
import MapGL, { Layer, Source, MapRef, useMap } from "react-map-gl";

import { useStyletron } from "baseui";
import "mapbox-gl/dist/mapbox-gl.css";

export const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYmFiYnMiLCJhIjoiY2s1b2JoMjZvMGYydzNmbXAxMXp1NWZhZyJ9.LEHmtAFLAij67eF-54FjxA";

// eslint-disable-next-line
export const Map = forwardRef(
  (
    {
      children,
      height,
      width,
      viewState,
      setViewState,
      onMove,
      onLoad,
      terrain,
    },
    ref
  ) => {
    return (
      <>
        <MapGL
          // initialViewState={initialViewState}
          ref={ref}
          mapboxAccessToken={MAPBOX_TOKEN}
          style={{ width, height }}
          mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
          onMove={(evt) => {
            setViewState(evt.viewState);
            onMove();
          }}
          {...viewState}
          onLoad={onLoad}
          terrain={terrain}
          maxPitch={85}
        >
          {children}
        </MapGL>
      </>
    );
  }
);
