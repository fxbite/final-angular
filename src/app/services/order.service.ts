import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { sample_order } from 'src/assets/data/FoodSample';
import { IFoodOrder } from '../shared/interfaces/IFoodOrder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getSampleOrder(): IFoodOrder[] {
    return sample_order;
  }

  createOrder(data: any) {
    return this.http.post(environment.ORDER_CREATE_URL, data);
  }
}
