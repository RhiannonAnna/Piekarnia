import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Alert } from 'selenium-webdriver';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  filterType: string = "";
  typeList: string[] = ['Chleb', 'Bułka'];
  productToDisplay: Product;

  constructor(private productsService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    if (id == 0) {
      this.productToDisplay = new Product();
      this.productToDisplay.id = 0;
    } else {
      this.productToDisplay = this.getProductById(id);
    }
  }

  alertButton(): void {
    if (this.validateName() && this.validateType() && this.validateDescription() && !this.isNotNumberPrice() && !this.isNotNumberQuantity() && !this.isNotNumberWeight()) {
      alert("Wszystko poprawnie");
    } else {
      alert("Nie jest poprawnie");
    }
  }
//#region Validation
  validateName(): boolean {
    if (this.productToDisplay.name.length > 3) {
      return true;
    } else {
      return false;
    }
  }
  validateType(): boolean {
    if (this.productToDisplay.type.length > 3) {
      return true;
    } else {
      return false;
    }
  }
  validateDescription(): boolean {
    if (this.productToDisplay.description.length > 3) {
      return true;
    } else {
      return false;
    }
  }
  isNotNumberId(): boolean {
    if (isNaN(this.productToDisplay.id)) {
      return true;
    } else {
      return false;
    }
  }
  isNotNumberPrice(): boolean {
    if (isNaN(this.productToDisplay.price)) {
      return true;
    } else {
      return false;
    }
  }
  isNotNumberWeight(): boolean {
    if (isNaN(this.productToDisplay.weight)) {
      return true;
    } else {
      return false;
    }
  }
  isNotNumberQuantity(): boolean {
    if (isNaN(this.productToDisplay.quantity)) {
      return true;
    } else {
      return false;
    }
  }
  //#endregion

  updateProduct(): void {
    this.productsService.updateProduct(this.productToDisplay);
    this.router.navigate(['/list']);
  }
  addProduct(): void {
    this.productsService.addProduct(this.productToDisplay);
    this.router.navigate(['/list']);
  }
  getProductById(id: number): Product {
    return this.productsService.getProduct(id);
  }
  isNewProduct(): boolean {
    if (this.productToDisplay.id == 0) {
      return true;
    } else {
      return false;
    }
  }
}
