import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  
import { TableModule } from 'primeng/table';  // PrimeNG Table module
import { ButtonModule } from 'primeng/button';  // PrimeNG Button module
import { InputTextModule } from 'primeng/inputtext';  // PrimeNG InputText module
import { PanelModule } from 'primeng/panel';  // PrimeNG Panel module
import { ChartComponent } from './chart/chart.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './service/product.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
