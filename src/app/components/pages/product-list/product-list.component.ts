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
  newPath: string;
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
      // @ts-ignore
      for (const datum of this.data) {
        for (const photos of datum.photos) {
          this.newPath = constants.URL + '/' + photos;
        }
        datum.photos.push(this.newPath);
        datum.photos.splice(0, 1);
      }
    });
  }

}
