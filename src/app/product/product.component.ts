import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { ProductService } from '../service/product.service';  
import { Product } from './product.module';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  ProductForm!: FormGroup;  
  products: Product[] = [];  
  selectedProduct: Product | null = null;  
  chartData: any[] = [];  

  constructor(
    private fb: FormBuilder,  
    private productService: ProductService 
  ) {}

  ngOnInit(): void {
    this.ProductForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],  
      price: [null, [Validators.required, Validators.min(1)]],      
      category: ['', [Validators.required]]                          
    });

    this.loadProducts();  
  }


  loadProducts(): void {
    this.products = this.productService.getProducts();  
    this.updateChartData();  
  }

 
  updateChartData(): void {
    this.chartData = this.products.map(product => ({
      name: product.name,
      value: product.price
    }));
  }

  submitForm(): void {
    if (this.ProductForm.invalid) {
      return;
    }
  
    const formValue = this.ProductForm.value;
  
    if (this.selectedProduct) {
     
      this.productService.updateProduct(this.selectedProduct.id, formValue);
    } else {
      
      this.productService.addProduct(formValue);
    }
  
    this.resetForm(); 
    this.loadProducts(); 
  }
  

  
  resetForm(): void {
    this.ProductForm.reset();
    this.selectedProduct = null;
  }

  // Edit an existing product by selecting it and populating the form
  editProduct(product: Product): void {
    this.selectedProduct = { ...product };  
    this.ProductForm.patchValue(product);  
  }

  // Delete a product by calling the product service
  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product.id);  
    this.loadProducts();  
  }

  
  addProduct(): void {
    if (this.ProductForm.invalid) {
      return;  
    }

    const formValue = this.ProductForm.value;
    this.productService.addProduct(formValue);  
    this.resetForm();  // Reset form after adding
    this.loadProducts();  // Reload the products after adding
  }

  // Handle updating an existing product (can be used in the template for "Update Product")
  updateProduct(): void {
    if (this.ProductForm.invalid || !this.selectedProduct) {
      return;  // Prevent submission if form is invalid or no product is selected
    }

    const formValue = this.ProductForm.value;
    this.productService.updateProduct(this.selectedProduct.id, formValue);  // Update product using the service
    this.resetForm();  // Reset form after updating
    this.loadProducts();  // Reload the products after updating
  }
}
