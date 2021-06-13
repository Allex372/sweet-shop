import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService, ProductsService} from '../../../../services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {


  @Output() wishListMass = new EventEmitter();
  wishList = [];


  constructor(private authService: AuthService, private router: Router, private activatedRouter: ActivatedRoute) {
  }

  @Input()
  data;

  ngOnInit(): void {
  }

  addToWishList(e: Event, el: any): void {
    this.wishListMass.emit(this.wishList);
    // @ts-ignore
    el.status = !el.status;
    if (el.status === true){
      this.wishList.push(el);
    } else {
      this.wishList.map((value) => {
        if (el._id === value._id){
          const index = this.wishList.indexOf(value);
          this.wishList.splice(index, 1);
        }
      });
    }
  }
}
