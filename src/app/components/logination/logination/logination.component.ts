import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';

@Component({
  selector: 'app-logination',
  templateUrl: './logination.component.html',
  styleUrls: ['./logination.component.css']
})
export class LoginationComponent implements OnInit {

  email = null;
  password = null;

  constructor() { }

  ngOnInit(): void {
  }

  Login(e: Event): void {
    // @ts-ignore
    this.email = e.target.value;
  }

  Pass(e: Event): void {
    // @ts-ignore
    this.password = e.target.value;
  }

  Send(e: Event): void {
    e.preventDefault();
    LoginService.login(this.email, this.password);
  }
}
