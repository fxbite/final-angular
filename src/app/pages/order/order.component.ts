import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  ngOnInit() {
    const map = L.map('map').setView([10.803349336834533, 106.65275557054262], 13);
    const icon = new L.Icon({
      iconUrl: '/assets/marker.png',
      iconSize: [25, 41],
      iconAnchor: [12, 5]
    });

    L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
      attribution: 'Intern Greenwich',
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    }).addTo(map);

    L.marker([10.803349336834533, 106.65275557054262], { icon }).addTo(map).bindPopup('Your current location').openPopup();
  }
}
