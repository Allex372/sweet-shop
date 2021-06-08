import {Component, Input, OnInit} from '@angular/core';
import {AuthService, ProductsService} from '../../../../services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private activatedRouter: ActivatedRoute) {
  }

  @Input()
  description;
  @Input()
  name;
  @Input()
  photos;
  @Input()
  price;
  @Input()
  id;

  // tslint:disable-next-line:typedef

  ngOnInit(): void {
  }

}
