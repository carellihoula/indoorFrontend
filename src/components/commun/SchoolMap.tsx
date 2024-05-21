import React from "react";
import { MapContainer, ImageOverlay } from "react-leaflet";
import L, { LatLngBoundsExpression, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";

interface SchoolMapProps {
  imageUrl: string; // URL of the school map image
  bounds: LatLngBoundsExpression; // Coordinates for the corners of the image
}

const SchoolMap: React.FC<SchoolMapProps> = ({ imageUrl, bounds }) => {
  // Ensure that 'bounds' is treated as an array of [number, number] tuples
  const safeBounds = bounds as [number, number][];

  // Calculating the center and explicitly declaring it as LatLngTuple
  const center: LatLngTuple = [
    (safeBounds[0][0] + safeBounds[1][0]) / 2, // Average of latitude coordinates
    (safeBounds[0][1] + safeBounds[1][1]) / 2, // Average of longitude coordinates
  ];

  return (
    <MapContainer
      center={center} // Using the calculated center
      zoom={1} // Initial zoom level
      style={{ height: "100%", width: "100%" }}
      crs={L.CRS.Simple} // Using simplified coordinates
      maxZoom={4}
      minZoom={-1}
      scrollWheelZoom={false}
    >
      <ImageOverlay
        url={imageUrl} // URL of the school map image
        bounds={safeBounds} // Bounds of the image on the map
      />
    </MapContainer>
  );
};

export default SchoolMap;
