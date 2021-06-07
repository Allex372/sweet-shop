import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ILogin, IToken} from '../models';
import {HttpClient} from '@angular/common/http';
import {take, tap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import constants from '../constants/constants';
import axios, {AxiosResponse} from 'axios';


const enum endpoint {
  login = 'auth',
  refresh = 'auth/refresh/',
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:5000/';
  private accessTokenKey = 'access-token';
  private refreshTokenKey = 'refresh-token';


  constructor(private httpClient: HttpClient) {
  }

  // @ts-ignore
  async login(body: {email: FormControl; password: FormControl }): void {
    const data = await axios.post(`${constants.URL}/auth`, body);
    this.setTokens(data.data);
  }

  refreshToken(): Observable<IToken> {
    console.log('***refresh token***');
    return this.httpClient.post<IToken>(`${constants.URL}/auth`, {token: this.getRefreshToken()})
      .pipe(
        tap((tokens: IToken) => this.setTokens(tokens))
      );
  }

  public isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  private setAccessToken(accessToken: string): void {
    localStorage.setItem(this.accessTokenKey, accessToken);
  }

  private setRefreshToken(refreshToken: string): void {
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey);
  }

  getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey);
  }

  removeTokens(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  private setTokens(tokens: IToken): void {
    const {access_token, refresh_token} = tokens;
    this.setAccessToken(access_token);
    this.setRefreshToken(refresh_token);
  }
}
