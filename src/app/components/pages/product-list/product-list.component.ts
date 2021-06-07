import { Component, OnInit } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute} from '@angular/router';
import {AuthService, ProductsService} from '../../../services';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ngOnInit(): boolean {
    const data = ProductsService.getAllProducts();
    console.log(data);
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  constructor(private authService: AuthService, private router: Router, private activatedRouter: ActivatedRoute) {
  }

}
