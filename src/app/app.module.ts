import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shardcomponents/footer/footer.component';
import { NavbarComponent } from './components/shardcomponents/navbar/navbar.component';
import { NotfoundComponent } from './components/shardcomponents/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { ProductDetalisComponent } from './components/products/product-detalis/product-detalis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    NotfoundComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductFormComponent,
    ProductDetalisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
