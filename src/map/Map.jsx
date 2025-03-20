import "./Map.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import { Draw } from "ol/interaction";
import { defaults as defaultControls } from "ol/control";
import { Style, Stroke, Fill } from "ol/style";
import { useEffect, useRef } from "react";

const Mape = ({ username }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Base map layer
    const rasterLayer = new TileLayer({
      source: new OSM(),
    });

    // Vector source to hold the polygon
    const vectorSource = new VectorSource();

    // Vector layer to display the polygon
    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        fill: new Fill({ color: "rgba(0, 150, 255, 0.4)" }),
        stroke: new Stroke({ color: "#0096FF", width: 2 }),
      }),
    });

    // Map initialization
    const map = new Map({
      target: mapRef.current,
      layers: [rasterLayer, vectorLayer],
      view: new View({
        center: [0, 0],
        zoom: 2,
        projection: "EPSG:4326",
      }),
      controls: defaultControls({ attribution: false, rotate: false }),
    });

    // Add Polygon Drawing Interaction
    const draw = new Draw({
      source: vectorSource,
      type: "Polygon",
    });
    map.addInteraction(draw);

    return () => {
      map.setTarget(null);
    };
  }, []);
  return (
    <div className="container2">
      <header>
        <nav>
          <div className="userName">
            <h1>{username}</h1>
          </div>
        </nav>
      </header>

      <div
        lang="en"
        className="map"
        ref={mapRef}
        style={{ width: "100%", height: "500px", border: "1px solid black" }}
      ></div>
    </div>
  );
};
export default Mape;
