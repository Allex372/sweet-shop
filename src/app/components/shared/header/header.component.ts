import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sale = null;
  news = null;
  prod = null;
  ttn = null;
  order = null;
  saleMass = [1];
  newsMass = [5];
  prodMass = [23];
  ttnMass = [12];
  orderMass = [14];

  constructor() {
  }

  ngOnInit(): void {
    for (const el of this.saleMass) {
      if (el){
        this.sale = el;
      }
    }
    for (const el of this.newsMass) {
      if (el){
        this.news = el;
      }
    }
    for (const el of this.prodMass) {
      if (el){
        this.prod = el;
      }
    }
    for (const el of this.ttnMass) {
      if (el){
        this.ttn = el;
      }
    }
    for (const el of this.orderMass) {
      if (el){
        this.order = el;
      }
    }
  }

}
