import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService, ProductsService} from '../../../services';
import constants from '../../../constants/constants';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  data: [];
  newPath: string;
  photos: [];


  @Output() dataMass = new EventEmitter();

  ngOnInit(): boolean {
    this.getData();
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  // tslint:disable-next-line:max-line-length
  constructor(private ProductService: ProductsService, private authService: AuthService, private router: Router, private activatedRouter: ActivatedRoute) {
  }

  private getData(): void {
    this.ProductService.getAllProducts().subscribe(value => {
      console.log(value);
      for (const obj of value) {
        // for (const photos of obj.photos) {
        //   this.newPath = constants.URL + '/' + photos;
        // }
        // console.log(obj);
        // obj.photos.push(this.newPath);
        // obj.photos.splice(0, 1);
        // obj.wishStatus = false;
        // this.data.push(obj);
        this.data = value;
      }
    });
  }

  mass(object: any): void {
    this.dataMass.emit(object);
  }
}
