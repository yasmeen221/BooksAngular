import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { ProductStaticService } from 'src/app/services/product-static.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any;

  constructor(public _productService: BooksService) {}
  ngOnInit(): void {
    this._productService.getAllBooks().subscribe({
      next: (data) => {
        this.products = data;
        // console.log(data);
      },
      error: (error) => {
        console.log('error from products', error);
      },
    });
  }

  deleteProductHandler(id: any) {
    this._productService.deleteBook(id).subscribe({
      next: (data) => {
        this.products = this.products.filter(
          (product: any) => product.id != id
        );
      },
    });
  }
}
