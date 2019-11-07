export class Product {
    id: number;
    name: string;
    type: string;
    price: number;
    weight: number;
    description: string;
    quantity: number;

    constructor() {
        this.id = 0;
        this.name = "";
        this.type = "";
        this.price = 0;
        this.weight = 0;
        this.description = "";
        this.quantity = 0;
    }
  }