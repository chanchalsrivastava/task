import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  products = this.productService.getProducts(); // Get products from the service

  constructor(private productService: ProductService) {}

}