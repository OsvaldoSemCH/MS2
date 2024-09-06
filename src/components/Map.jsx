import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { useMap } from 'react-leaflet/hooks'
export function SenaiMap()
{
    return(
    <MapContainer center={[-25.4249118, -49.2749302]} zoom={200} scrollWheelZoom={true} style={{width: '100%', height: "600px"}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-25.4249118, -49.2749302]}>
          <Popup>
            <a target='_blank' href='https://www.google.com/maps/place/Col%C3%A9gio+SESI+Celso+Charuri/@-25.424858,-49.2746369,17.56z/data=!4m10!1m2!2m1!1ssenai+celso+charuri+curitiba!3m6!1s0x94dce55e3000a6f1:0xc52cd0912ecfc2bd!8m2!3d-25.4248519!4d-49.2724046!15sChxzZW5haSBjZWxzbyBjaGFydXJpIGN1cml0aWJhIgOIAQFaHiIcc2VuYWkgY2Vsc28gY2hhcnVyaSBjdXJpdGliYZIBC2hpZ2hfc2Nob29smgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJxZEY5aFgzTlJSUkFC4AEA!16s%2Fg%2F11vd8tbjfz?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D'>Senai Celso Charuri - Curitiba</a>
          </Popup>
        </Marker>
    </MapContainer>
    )
}