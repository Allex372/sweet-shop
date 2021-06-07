import {Injectable} from '@angular/core';
// @ts-ignore
import constants from '../constants/constants';
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
    console.log(callback.data);
  }

}
