import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shared/shop.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../shared/product';

@Component({
  selector: 'details-page',
  templateUrl: './details-page.component.html',
  styles: [`

  .flip-boldness{ font-weight: bold; border: 1px solid red; padding: 2px; background-color: black; color:#fff}
  .intro{ margin: 15px;  }      
  .flip-color{ color: red; }
  			.flip-size{ font-size: 12px; letter-spacing: 1px; }			
  			.flip-title{ border: 2px solid red; font-size: 70px; padding: 0 12px; cursor: pointer; }
  			
  			.flip-plot{
          margin-top:5px;
          padding: 6px;
        }
        .flex-container{
          display: flex;
	        flex-flow: row wrap;
          justify-content: center;
          justify-item: center;
          margin-top: 50px;
        }
        .details{
          background: grey;
          margin-bottom: 20px;
        }
        .content-one{
          margin-right: 100px;
        }
        @media only screen and (max-width: 600px) {
          .poster{
            display: none;
          }
        }
  		`]
})
export class DetailsPageComponent implements OnInit {

  product: IProduct;
  pageTitle: string = 'Product Detail';

	constructor(private shopService: ShopService, private route: ActivatedRoute) {

	}
	ngOnInit() {

  this.route.params.forEach((params: Params) => {
    this.product=this.shopService.getProduct(+params[+'id'])
  });

    }

}
