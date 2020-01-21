import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ShopService } from '../shared';
import { IProduct } from '../shared/product';

@Component({
    selector: 'product-details',
    template: `
            <div class="container" *ngIf = "product">
                <div class="card mt-4">
                    <div class="card-header">{{pageTitle}}</div>
                    <div class='card-body'>
    <div class='row'>
      <div class='col-md-8'>
        <div class='row'>
          <div class='col-md-4'>Name:</div>
          <div class='col-md-8'>{{product.productName}}</div>
        </div>
        <div class='row'>
          <div class='col-md-4'>Code:</div>
          <div class='col-md-8'>{{product.productCode | lowercase | convertToSpaces: '-'}}</div>
        </div>
        <div class='row'>
          <div class='col-md-4'>Description:</div>
          <div class='col-md-8'>{{product.description}}</div>
        </div>
        <div class='row'>
          <div class='col-md-4'>Availability:</div>
          <div class='col-md-8'>{{product.releaseDate}}</div>
        </div>
        <div class='row'>
          <div class='col-md-4'>Price:</div>
          <div class='col-md-8'>{{product.price|currency:'USD':'symbol'}}</div>
        </div>
        <div class='row'>
          <div class='col-md-4'>5 Star Rating:</div>
          <div class='col-md-8'>
            <star [rating]='product.starRating'>
            </star>
          </div>
        </div>
      </div>

      <div class='col-md-4'>
        <img class='center-block img-responsive'
             [style.width.px]='200'
             [style.margin.px]='2'
             [src]='product.imageUrl'
             [title]='product.productName'>
      </div>
    </div>
  </div>
                    <div class="card-footer">
                        <button class='btn btn-outline-secondary'
                        (click)="onBack()"
                        style='width:80px'>
                            <i class ="fa fa-chevron-left"></i> Back
                        </button> 
                    </div>
                </div>
            </div>
    `
})
export class ProductDetailsComponent implements OnInit {
    constructor( private route: ActivatedRoute, private router: Router, private shopService: ShopService ){ }
        pageTitle: string = 'Product Details: '
        product : IProduct;
        errorMsg: string = '';
    ngOnInit(){

        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
            const id = +param;
            this.getProduct(id);
        }
    }
    getProduct(id: number){
        this.shopService.getProduct(id).subscribe({
            next: product => this.product = product,
            error: err => this.errorMsg = err             
        });
    }
    onBack(): void{
        this.router.navigate(['alias/products'])
    }

}