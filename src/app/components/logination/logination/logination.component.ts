import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ILogin, IToken} from '../../../models';
import {AuthService, UserService} from '../../../services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logination',
  templateUrl: './logination.component.html',
  styleUrls: ['./logination.component.css']
})
export class LoginationComponent implements OnInit {

  error: any;
  message: string;
  auth: ILogin;
  token: IToken;
  password = null;
  email = null;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) {
  }

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
    this.auth = {password: this.password, email: this.email};
    this.authService.login(this.auth).subscribe((value) => {
      console.log(value, 'log');
      this.router.navigate(['']);
      this.userService.setUserId(value.user_id);
    }, (error) => {
      console.log('*error*');
      this.error = error.error;
      this.message = error.error.message;
      console.log(this.message, 'error');
    });

  }

  forgotLink(): void {
    this.router.navigate(['auth/forgotPassword']);
  }
}
