import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {


  product1: Product = new Product();

  product2: Product = {id: 2, name: 'Ciabata', type: 'Bułka', price: 0.75, weight: 60, description: 'Kwadratowa bułeczka z mąki pszennej i drożdży', quantity: 56};
  constructor() { }

  ngOnInit() {
    this.product1.id = 1;
    this.product1.name = "grahamka";
    this.product1.type = "bułka";
    this.product1.price = 0.90;
    this.product1.weight = 90;
    this.product1.description = "40% z pełnoziarnistej mąki pszennej graham";
    this.product1.quantity = 45;
  }

  alertButton(){
    alert(JSON.stringify(this.product1))
  }
}
