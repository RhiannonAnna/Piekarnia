import { Injectable } from '@angular/core';
import { Product } from '../pages/products/product';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  products: Product[] = [
    { id: 1, name: 'Kaizerka', type: 'Bułka', price: 0.65, weight: 60, description: 'Klasyczna bułeczka z mąki pszennej wypiekana', quantity: 35 },
    { id: 2, name: 'Ciabata', type: 'Bułka', price: 0.75, weight: 60, description: 'Kwadratowa bułeczka z mąki pszennej i drożdży', quantity: 56 },
    { id: 3, name: 'Cebulanka', type: 'Bułka', price: 0.72, weight: 70, description: 'Pszenna bułeczka z dodatkiem prażonej cebulki', quantity: 55 },
    { id: 4, name: 'Kukurydzina', type: 'Bułka', price: 0.85, weight: 70, description: 'Bułeczka o pięknym żółto-pomarańczowym', quantity: 22 },
    { id: 5, name: 'Mała zwykła', type: 'Bułka', price: 0.7, weight: 80, description: 'Pszenna bułeczka z charakterystycznym nacięciem przez środek', quantity: 34 },
    { id: 6, name: 'Duża zwykła', type: 'Bułka', price: 1.2, weight: 120, description: 'Pszenna bułeczka z charakterystycznym nacięciem przez środek', quantity: 76 },
    { id: 7, name: 'Słonecznikowy', type: 'Chleb', price: 3.1, weight: 450, description: 'Bogaty w upiększającą witaminę E chleb pszenno-żytni', quantity: 34 },
    { id: 8, name: 'Wieloziarnisty', type: 'Chleb', price: 2.7, weight: 500, description: 'Chleb pszenno-żytni z nasionami', quantity: 23 },
    { id: 9, name: 'Wiejski duży', type: 'Chleb', price: 4.5, weight: 880, description: 'Tradycyjny chleb na zakwasie', quantity: 98 },
    { id: 10, name: 'Wiejski mały', type: 'Chleb', price: 3.3, weight: 450, description: 'Tradycyjny chleb na zakwasie', quantity: 45 },
    { id: 11, name: 'Graham', type: 'Chleb', price: 3.7, weight: 400, description: 'Bułka wypieczona w 40% z pełnoziarnistej mąki pszennej graham', quantity: 64 },
    { id: 12, name: 'Orkiszowy', type: 'Chleb', price: 5.40, weight: 350, description: 'Chleb żytni mieszany, mąka żytnia (80%) i pszenna (20%), orkiszowa', quantity: 34 },
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }
  addProduct(product: Product): void {
    product.id = this.createNewId();
    this.products.push(product);
  }
  removeProduct(id: number): void {
    let templista: Product[] = [];
    for (let element of this.products) {
      if (element.id != id) {
        templista.push(element);
      }
    }
    this.products = templista;
  }
  updateProduct(productToUpdate: Product): void {
    let templista: Product[] = [];
    for (let element of this.products) {
      if (element.id != productToUpdate.id) {
        templista.push(element);
      } else {
        templista.push(productToUpdate);
      }
    }
    this.products = templista;
  }
  getProductbyId(id: number): Product {
    for (let element of this.products) {
      if (element.id == id) {
        return element;
      }
    }
  }
  createNewId(): number {
    this.products.sort((a, b) => {
      return a.id - b.id;
    });
    let id = this.products[this.products.length-1].id;
    id = id + 1;
    return id;
  }
}