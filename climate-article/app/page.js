'use client'
/// app.js
import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer, ArcLayer} from '@deck.gl/layers';
import {Map} from 'react-map-gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibGlhbXRmdCIsImEiOiJjbHB0Z2s5ZDcwMjRsMmltbGgwbmY2ajV1In0.DBL92tbYvPHZisweBB-tCw';
const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};




export default function App() {
  // Data to be used by the LineLayer
  const data = [
    {sourcePosition: [-122.41669, 37.7853], targetPosition: [-0.41669, 37.781]}
  ];

  const layers = [
    new ArcLayer({id: 'arc-layer', data})
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN}  mapStyle={MAP_STYLE} />
    </DeckGL>
  );
}