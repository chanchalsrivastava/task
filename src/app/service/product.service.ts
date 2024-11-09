// product.service.ts (example)
import { Injectable } from '@angular/core';
import { Product } from '../product/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = []; 

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(id: number, updatedProduct: Product): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
    }
  }

  deleteProduct(id: number): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
