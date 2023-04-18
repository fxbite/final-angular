import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
<<<<<<< HEAD
  defaultLocation = {
    latitude: 10.803349336834533,
    longitude: 106.65275557054262
  };

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.generateMap();
  }

  private generateMap() {
    this.locationService.getCurrentLocation().subscribe((value) => {
      const latitude = value.lat ? value.lat : this.defaultLocation.latitude;
      const longitude = value.lng ? value.lng : this.defaultLocation.longitude;

      const map = L.map('map').setView([latitude, longitude], 13);
      const icon = new L.Icon({
        iconUrl: '/assets/img/marker.png',
        iconSize: [25, 41],
        iconAnchor: [12, 5]
      });

      L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
        attribution: 'Intern Greenwich',
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
      }).addTo(map);

      L.marker([latitude, longitude], { icon }).addTo(map).bindPopup('Your current location').openPopup();
    });
=======
  ngOnInit() {
    const map = L.map('map').setView([10.803349336834533, 106.65275557054262], 13);
    const icon = new L.Icon({
      iconUrl: '/assets/img/marker.png',
      iconSize: [25, 41],
      iconAnchor: [12, 5]
    });

    L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
      attribution: 'Intern Greenwich',
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(map);

    L.marker([10.803349336834533, 106.65275557054262], { icon })
      .addTo(map)
      .bindPopup('Your current location')
      .openPopup();
>>>>>>> dev-shidoru
  }
}
