import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  arrowState = false;
  arrowState1 = false;
  arrowState2 = false;


  constructor() {
  }

  ngOnInit(): void {
  }

  arrowClick(e: Event): void {
    this.arrowState = !this.arrowState;
  }

  arrowClick1(e: Event): void {
    this.arrowState1 = !this.arrowState1;
  }

  arrowClick2(e: Event): void {
    this.arrowState2 = !this.arrowState2;
  }
}
