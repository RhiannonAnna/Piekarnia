import { Injectable } from '@angular/core';
import { DataBaseService } from 'src/app/shared/data-base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dataBase: DataBaseService) { }

  getAllProducts() {
    let products = this.dataBase.getAllProducts();
    return products;
  }
}
