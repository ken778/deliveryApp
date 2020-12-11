import { Component } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss'],
})
export class MapPage {

  map: Leaflet.Map;

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = new Leaflet.Map('mapId2').setView([-28.48322, 24.676997], 6);

    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.map);

    const markPoint = Leaflet.marker([-26.217509, 27.917094]);
    markPoint.bindPopup('<p>Soweto Branch</p>');
    this.map.addLayer(markPoint);

   
    const  tshwane    = Leaflet.marker([-25.779835, 28.202309]).bindPopup('Tshwane Branch');
   this.map.addLayer(tshwane);
   const mokopane    = Leaflet.marker([-24.20793, 29.012952]).bindPopup('Mokopane Branch');
   this.map.addLayer(mokopane);
   const mbombela    = Leaflet.marker([-25.504354, 31.035438]).bindPopup('Mbombela Branch');
   this.map.addLayer(mbombela);
   const karoo    = Leaflet.marker([-32.443042, 20.317543]).bindPopup('Mbombela Branch');
   this.map.addLayer(karoo);
   const emthanjeni    = Leaflet.marker([-30.310618, 23.642493]).bindPopup('Mbombela Branch');
   this.map.addLayer(emthanjeni);
   const Nkonkobe   = Leaflet.marker([-25.840981, 26.613006]).bindPopup('Mbombela Branch');
   this.map.addLayer(Nkonkobe);
   const merafong  = Leaflet.marker([-26.461695, 27.524048]).bindPopup('Johannesburg Branch');
   this.map.addLayer(merafong);
   const Mogalakwena   = Leaflet.marker([-23.957114, 28.402954]).bindPopup('Polokwane Branch');
   this.map.addLayer(Mogalakwena);
   const Witzenberg   = Leaflet.marker([-33.313062, 19.43811]).bindPopup('Cape Town Branch');
   this.map.addLayer(Witzenberg);
   const Phumelela   = Leaflet.marker([-27.55793, 28.886353]).bindPopup('Newcastle Branch');
   this.map.addLayer(Phumelela);
   const eMadlangeni   = Leaflet.marker([-27.401982, 30.116821]).bindPopup('Newcastle Branch');
   this.map.addLayer(eMadlangeni);
  
   var bounds =[[-25.411841, 29.002486],[-32.611614,26.638781]];
   Leaflet.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(this.map);
  
   var latlngs = [
    [-25.411841, 29.002486],
    [-25.562897, 28.793308],
    [-27.990338, 30.766548],
    [-32.611614,26.638781]
];

var polyline = Leaflet.polyline(latlngs, {color: 'red'}).addTo(this.map);
  
  }

  ionViewWillLeave() {
    this.map.remove();
  }

}
