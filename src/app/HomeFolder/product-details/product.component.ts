import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shared/shop.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../shared/product';

@Component({
  templateUrl: './product.component.html'
})
export class ProductComponent{

  product: IProduct;
  pageTitle: string = 'Products List';

	constructor(private shopService: ShopService, private route: ActivatedRoute) {

	}
}
