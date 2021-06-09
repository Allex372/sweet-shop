import {Component, OnInit} from '@angular/core';
import {SidebarMenuItems} from '../../../constants/sidebar-Menu-items';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  sidebar = SidebarMenuItems;

  arrowState1 = false;
  arrowState2 = false;
  arrowState3 = false;
  arrowState = false;


  constructor() {
  }

  ngOnInit(): void {
  }

  arrowClick(e: Event, id): void {
    if (id === 1){
      this.arrowState = !this.arrowState;
      console.log(this.arrowState);
    }
  }
}
