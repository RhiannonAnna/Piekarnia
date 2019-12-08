import { Injectable } from '@angular/core';
import { DataBaseService } from 'src/app/shared/data-base.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dataBase: DataBaseService) { }

  getAllProducts() {
    let products = this.dataBase.getAllProducts();
    return products;
  }
  deleteProduct(id: number): void {
    this.dataBase.removeProduct(id);
  }
  updateProduct(product: Product): void {
    this.dataBase.updateProduct(product);
  }
  addProduct(product: Product): void {
    this.dataBase.addProduct(product);
  }
  getProduct(id: number): Product {
    return this.dataBase.getProductbyId(id);
  }
}
