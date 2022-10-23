import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback } from "react";
import { Center } from "../../App";

type MapComponentType = {
  center: Center;
};

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const MapComponent = ({ center }: MapComponentType) => {
  const libraries: (
    | "places"
    | "geometry"
    | "drawing"
    | "localContext"
    | "visualization"
  )[] = ["places", "geometry"];

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAleQtbIgfBnoOY5m-7qRP7sfAcP1aA2oE",
    libraries,
  });

  // const [map, setMap] = useState<any | null>(null);

  const onLoad = useCallback((map: any) => {
    map.setZoom(14);
  }, []);

  const onUnmount = useCallback((map: any) => {
    // setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapComponent;
