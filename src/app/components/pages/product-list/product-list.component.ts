import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService, ProductsService} from '../../../services';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  description: [];
  name: [];
  photos: [];
  price: [];
  id: [];

  ngOnInit(): boolean {
    const photos = [];
    const description = [];
    const name = [];
    const price = [];
    const id = [];
    ProductsService.getAllProducts().then((value) => {
      for (const el of value.data) {
        description.push(el.description);
        name.push(el.name);
        price.push(el.price);
        id.push(el._id);
        for (const photo of el.photos) {
          const fullPath = 'http://localhost:5000' + '/' + photo;
          photos.push(fullPath);
        }
        // @ts-ignore
        this.photos = photos;
        // @ts-ignore
        this.description = description;
        // @ts-ignore
        this.name = name;
        // @ts-ignore
        this.price = price;
        // @ts-ignore
        this.id = id;

      }
      console.log(this.photos);
    });
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

constructor(private authService: AuthService, private router: Router, private activatedRouter: ActivatedRoute) {}

}
