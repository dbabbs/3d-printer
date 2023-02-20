import { Map } from "./map";
import { useRef, useState } from "react";
import { useStyletron } from "baseui";
import { LabelMedium, ParagraphMedium } from "baseui/typography";
import { Source, Layer } from "react-map-gl";

const skyLayer = {
  id: "sky",
  type: "sky",
  paint: {
    "sky-type": "atmosphere",
    "sky-atmosphere-sun": [0.0, 0.0],
    "sky-atmosphere-sun-intensity": 15,
  },
};
export const MapSelector = ({ bounds, setBounds }) => {
  const [css, theme] = useStyletron();
  const [viewState, setViewState] = useState({
    longitude: -66.42653937652435,
    latitude: 18.244945178387486,
    zoom: 8,
  });

  const ref = useRef();

  function calculateBounds() {
    if (ref.current) {
      const { _sw, _ne } = ref.current.getMap().getBounds();

      setBounds({ sw: _sw, ne: _ne });
    }
  }
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      })}
    >
      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "50% 50%",
          width: "100%",
        })}
      >
        <Map
          ref={ref}
          viewState={viewState}
          setViewState={setViewState}
          height="500px"
          width="500px"
          onMove={calculateBounds}
          onLoad={calculateBounds}
        ></Map>
        <Map
          ref={ref}
          viewState={viewState}
          setViewState={setViewState}
          height="500px"
          width="500px"
          onMove={calculateBounds}
          onLoad={calculateBounds}
          terrain={{ source: "mapbox-dem", exaggeration: 2 }}
        >
          <Source
            id="mapbox-dem"
            type="raster-dem"
            url="mapbox://mapbox.mapbox-terrain-dem-v1"
            tileSize={512}
            maxzoom={14}
          />
          <Layer {...skyLayer} />
        </Map>
      </div>

      <div
        className={css({
          display: "grid",
          gridTemplateColumns: "50% 50%",
          width: "100%",
        })}
      >
        <div>
          <LabelMedium>Northeast:</LabelMedium>{" "}
          <ParagraphMedium>
            {bounds.ne.lng.toFixed(5)}, {bounds.ne.lat.toFixed(5)}
          </ParagraphMedium>
        </div>

        <div>
          <LabelMedium>Southwest</LabelMedium>{" "}
          <ParagraphMedium>
            {bounds.sw.lng.toFixed(5)}, {bounds.sw.lat.toFixed(5)}
          </ParagraphMedium>
        </div>
      </div>
    </div>
  );
};
