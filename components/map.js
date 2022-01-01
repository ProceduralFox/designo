import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'



const Map = ({ width, height, screenH, screenW }) => {



  return (
    <MapContainer center={[width, height]} zoom={13} scrollWheelZoom={false} style={{height: 326, width: screenW}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[width, height]}>
      </Marker> */}
    </MapContainer>
  )
}

export default Map