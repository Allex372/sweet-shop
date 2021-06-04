import {Injectable} from '@angular/core';
// @ts-ignore
import constants from '../constants/constants';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor() {
  }

  // tslint:disable-next-line:typedef
  static async login(email, password){
    const data = {email, password};
    const callback = await axios.post(`${constants.URL}/auth`, data);
    console.log(callback.status);
    const access_token = callback.data.access_token;
    const refresh_token = callback.data.refresh_token;
    localStorage.setItem(constants.access_token, access_token);
    localStorage.setItem(constants.refresh_token, refresh_token);
  }

}
