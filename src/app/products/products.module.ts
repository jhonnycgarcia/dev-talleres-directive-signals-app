import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
