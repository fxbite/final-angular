import { Component } from '@angular/core';
import { faHandshake, faHouseFlag, faTruckFast, faCalendarCheck, faClipboardCheck, faTicket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  faSimple = faHandshake;
  faDeliver = faTruckFast;
  faHome = faHouseFlag;
  faFullTime = faCalendarCheck;
  faQuality = faClipboardCheck;
  faSaleOff = faTicket;
}
