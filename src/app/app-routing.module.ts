import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetalisComponent } from './components/products/product-detalis/product-detalis.component';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { NotfoundComponent } from './components/shardcomponents/notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: ProductsComponent },
  { path: 'book/:id', component: ProductDetalisComponent },
  { path: 'book/:id/edit', component: ProductFormComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
