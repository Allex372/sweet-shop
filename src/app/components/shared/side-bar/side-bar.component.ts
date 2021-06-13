import {Component, OnInit} from '@angular/core';
import {SidebarMenuItems} from '../../../constants/sidebar-Menu-items';
import {SidebarSubmenuItems} from '../../../constants/Sideba-Submenu-Items';
import {Router} from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  items = SidebarMenuItems;
  subItems = SidebarSubmenuItems;


  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {}


  arrowClick(item): void {
    item.arrowState = !item.arrowState;
  }

  navigateTo(item: any): void {
    this.router.navigate([item.link]);
  }

}

