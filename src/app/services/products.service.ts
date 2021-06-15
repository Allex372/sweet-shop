import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import axios from 'axios';
import constants from '../constants/constants';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  getAllProducts(): Observable<any> {
    return this.httpClient.get<any>(`${constants.URL}/${constants.products}`);
  }

  // tslint:disable-next-line:typedef
  static async importProducts(data) {
    const [result] = await Promise.all([axios.post(`${constants.URL}/${constants.products}`, data)]);
    return result;
  }

}
