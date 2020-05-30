import React from 'react'
import { Map } from 'react-leaflet';

export const Map = () => (
    <Map center={[地図の中央位置（緯度経度）]} zoom={13}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors" />
  <Marker position={[マーカーを表示したい場所（緯度、経度）]}>
    <Popup>[吹き出しに表示するテキスト]</Popup>
  </Marker>
</Map>

);