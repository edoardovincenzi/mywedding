import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import { useTranslation } from 'react-i18next';

const MapNearMe = () => {
  const { t } = useTranslation();
  return (
    <MapContainer
      center={[45.3, 10.87]}
      zoom={9}
      scrollWheelZoom={true}
      className=" w-full mx-auto mt-4 rounded-lg !h-[50vh]"
      style={{ height: 'calc(100vh - 80px - 224px)' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[45.35364840802662, 10.725518220410564]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [20, 13],
          })
        }
      >
        <Tooltip permanent direction="right" interactive={true}>
          <span className="text-sm flex flex-col">
            <b>{t('nearMe.mapValeggio')}</b>
            <a href="#Valeggio">{t('nearMe.mapMoreInfo')}</a>
          </span>
        </Tooltip>
      </Marker>
      <Marker
        position={[45.439670342375, 10.686567998527812]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [20, 13],
          })
        }
      >
        <Tooltip permanent direction="right" interactive={true}>
          <span className="text-sm flex flex-col">
            <b>{t('nearMe.mapPeschiera')}</b>
            <a href="#Peschiera">{t('nearMe.mapMoreInfo')}</a>
          </span>
        </Tooltip>
      </Marker>
      <Marker
        position={[45.43275035884322, 10.98549285120419]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [20, 13],
          })
        }
      >
        <Tooltip permanent direction="right" interactive={true}>
          <span className="text-sm flex flex-col">
            <b>{t('nearMe.mapVerona')}</b>
            <a href="#Verona">{t('nearMe.mapMoreInfo')}</a>
          </span>
        </Tooltip>
      </Marker>
      <Marker
        position={[45.15634436643838, 10.789987553987565]}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [20, 13],
          })
        }
      >
        <Tooltip permanent direction="right" interactive={true}>
          <span className="text-sm flex flex-col">
            <b>{t('nearMe.mapMantova')}</b>
            <a href="#Mantova">{t('nearMe.mapMoreInfo')}</a>
          </span>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default MapNearMe;
