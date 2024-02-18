import { Injectable } from '@angular/core';
import { Iproduct } from '../module/iproduct';
import { productLists } from './productLists';

@Injectable({
  providedIn: 'root',
})
export class ProductStaticService {
  products: Iproduct[] = [];

  constructor() {
    this.products = productLists;
  }
  getAllProducts(): Iproduct[] {
    return this.products;
  }

  getProductById(id: any) {
    // return this.products.find((product) => product.id == id);
    return this.products.find((p) => p.id == id);
  }
  addNewProduct(product: Iproduct): void {
    // this.products = this.products.concat(product);
    this.products.push(product);
  }
  updateProduct(id: number, product: Iproduct) {
    const index = this.products.findIndex((p) => p.id == id);
    if (index !== -1) {
      this.products[index] = product;
    } else {
      console.log('No such product exists');
    }
  }
  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id != id);
    return this.products;
  }
}
