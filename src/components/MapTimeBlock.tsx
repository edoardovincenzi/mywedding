import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const MapTimeBlock = () => {
  return (
    <MapContainer
      center={[45.3, 11]}
      zoom={9}
      scrollWheelZoom={true}
      className="h-[40vh] w-[80vw] mx-auto mt-11 rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[45.223865011261026, 10.784063829222905]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [20, 13],
          })
        }
      >
        <Tooltip permanent direction="right">
          <span className="text-sm">
            <b>Villa corte Peron</b>
          </span>
        </Tooltip>
      </Marker>
      <Marker
        position={[45.353534419661756, 10.730409461364351]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [20, 13],
          })
        }
      >
        <Tooltip permanent direction="right">
          <span className="text-sm">
            <b>Castello di Valeggio sul Mincio</b>
          </span>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default MapTimeBlock;
