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
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  repeatPassword = new FormControl('', [Validators.required, Validators.minLength(8)]);
  email = new FormControl('', [Validators.required]);
  form = new FormGroup({
    password: this.password,
    email: this.email,
  });

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
    const user = {email: this.email, password: this.password};
    this.authService.login(user).subscribe(value => console.log(value));
  }

  forgotLink(): void {
    this.router.navigate(['auth/forgotPassword']);
  }
}
