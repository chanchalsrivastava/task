// src/app/chart/chart.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {
  @Input() products: any[] = []; // Input for receiving product data
  chartData: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      this.updateChartData(); // Recalculate chart data on changes
    }
  }

  updateChartData(): void {
    this.chartData = this.products.map(product => ({
      name: product.name,
      value: product.price
    }));
  }
}
