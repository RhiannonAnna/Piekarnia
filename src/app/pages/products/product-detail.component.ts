import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product1: Product = new Product();

  constructor() { }

  ngOnInit() {
    this.product1.id = 1;
    this.product1.name = "";
    this.product1.type = "bułka";
    this.product1.price = 0.90;
    this.product1.weight = 90;
    this.product1.description = "40% z pełnoziarnistej mąki pszennej graham";
    this.product1.quantity = 45;
  }

  alertButton(): void {
    // alert(JSON.stringify(this.product1))
    if(this.validateName() && this.validateType() && this.validateDescription() && !this.isNotNumberPrice() && !this.isNotNumberQuantity() && !this.isNotNumberWeight()){
      alert("Wszystko poprawnie");
    }else{
      alert("Nie jest poprawnie");
    }
  }

  validateName(): boolean {
    if(this.product1.name.length > 3){
      return true;
    } else {
      return false;
    } 
  }
  validateType(): boolean {
    if(this.product1.type.length > 3){
      return true;
    } else {
      return false;
    } 
  }
  validateDescription(): boolean {
    if(this.product1.description.length > 3){
      return true;
    } else {
      return false;
    } 
  }
  isNotNumberId(): boolean {
  if (isNaN(this.product1.id)){
    return true;
  } else {
    return false;
  } 
}
isNotNumberPrice(): boolean {
  if (isNaN(this.product1.price)){
    return true;
  } else {
    return false;
  } 
}
isNotNumberWeight(): boolean {
  if (isNaN(this.product1.weight)){
    return true;
  } else {
    return false;
  } 
}
isNotNumberQuantity(): boolean {
  if (isNaN(this.product1.quantity)){
    return true;
  } else {
    return false;
  } 
}
}
