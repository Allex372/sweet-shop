import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService, ProductsService} from '../../../services';
import constants from '../../../constants/constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  data: null;
  photos: [];

  ngOnInit(): boolean {
    this.getData();
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

constructor(private authService: AuthService, private router: Router, private activatedRouter: ActivatedRoute) {}

  private getData(): void {
    ProductsService.getAllProducts().then((value) => {
      this.data = value.data;
      for (const datum of this.data) {
        for (let photos of datum.photos) {
          const newPath = constants.URL + '/' + photos;
          console.log(newPath);
        }
      }
    });
  }

}
