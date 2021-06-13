import {Component, Input, OnInit} from '@angular/core';
import {AuthService, ProductsService} from '../../../../services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  wishStyle: false;

  constructor(private authService: AuthService, private router: Router, private activatedRouter: ActivatedRoute) {
  }

  @Input()
  data;

  ngOnInit(): void {
  }


  addToWishList(e: Event, id: number): void {
    // @ts-ignore
    this.wishStyle = !this.wishStyle;
    console.log(this.wishStyle);
    console.log(this.data);
  }
}
