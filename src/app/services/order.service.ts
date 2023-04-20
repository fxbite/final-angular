import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IFoodOrder } from '../shared/interfaces/IFoodOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  createOrder(data: IFoodOrder) {
    return this.http.post(environment.ORDER_CREATE_URL, data);
  }
}
