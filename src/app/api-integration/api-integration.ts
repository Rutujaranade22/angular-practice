import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.html',
  styleUrls: ['./api-integration.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ApiIntegration {
  productList: any[] = [];

  constructor(private http: HttpClient) {
    this.getProductList();
  }

  getProductList() {
    const url = 'https://dummyjson.com/products';  // ✅ Correct API
    this.http.get<any>(url).subscribe((data) => {
      console.log('Data:', data);
      this.productList = data.products;            // ✅ Correct access
    });
  }

  trackByProductId(index: number, product: any) {
    return product.id;
  }
}
