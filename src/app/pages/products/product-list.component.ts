import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  filterMaxWeight: number = null;
  filterMinWeight: number = null;
  filterMinQuantity: number = null;
  filterMaxQuantity: number = null;
  filterMinPrice: number = null;
  filterMaxPrice: number = null;
  
  filterType: string = "";
  typeList: string[] =['Chleb', 'Bułka'];

  displayedColumns: string[] = ['id', 'name', 'type', 'price', 'weight', 'description', 'quantity'];
  dataSource = [];
  allProducts = [];
  constructor(private productsService: ProductService) { }

  ngOnInit() {
    this.dataSource = this.productsService.getAllProducts();
    this.allProducts = this.productsService.getAllProducts();
  }

  
  filterList(): void {
    this.dataSource = this.allProducts;
    let tempListType = [];
      for(let item of this.dataSource){
        if(this.filterType == "" || item.type == this.filterType){
          tempListType.push(item);
        } 
    }
    let tempListWeight = [];
    if(this.filterMaxWeight == null){
      this.filterMaxWeight = 99999;
    }
    if(this.filterMinWeight == null){
      this.filterMinWeight = 0;
    }
    for(let item of tempListType){
      if(item.weight > this.filterMinWeight && item.weight < this.filterMaxWeight){
        tempListWeight.push(item);
      }
    }
    let tempListQuantity = [];
    if(this.filterMaxQuantity == null){
      this.filterMaxQuantity = 99999;
    }
    if(this.filterMinQuantity == null){
      this.filterMinQuantity = 0;
    }
    for(let item of tempListWeight){
      if(item.quantity > this.filterMinQuantity && item.quantity < this.filterMaxQuantity){
        tempListQuantity.push(item);
      }
    }
    let tempListPrice = [];
    if(this.filterMaxPrice == null){
      this.filterMaxPrice = 99999;
    }
    if(this.filterMinPrice == null){
      this.filterMinPrice = 0;
    }
    for(let item of tempListQuantity){
      if(item.price > this.filterMinPrice && item.price < this.filterMaxQuantity){
        tempListPrice.push(item);
      }
    }
    this.dataSource = tempListPrice;

  }
  clearFilters(): void {
    this.filterMaxWeight = null;
    this.filterMinWeight = null;
    this.filterMinQuantity = null;
    this.filterMaxQuantity = null;
    this.filterMinPrice = null;
    this.filterMaxPrice = null;
    this.filterType = "";
    this.dataSource = this.allProducts;
  }
}
