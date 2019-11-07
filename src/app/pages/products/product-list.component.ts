import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'type', 'price', 'weight', 'description', 'quantity'];
  dataSource = [];
  constructor(private productsService: ProductService) { }

  ngOnInit() {
    this.dataSource = this.productsService.getAllProducts();
  }

}
