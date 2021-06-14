import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import axios from 'axios';
import constants from '../constants/constants';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  // tslint:disable-next-line:typedef
  static async getAllProducts(){
    return  await axios.get(`${constants.URL}/${constants.products}`);
  }

  // tslint:disable-next-line:typedef
  static async importProducts(data) {
    const [result] = await Promise.all([axios.post(`${constants.URL}/${constants.products}`, data)]);
    return result;
  }

}
