import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { ProductStaticService } from 'src/app/services/product-static.service';

@Component({
  selector: 'app-product-detalis',
  templateUrl: './product-detalis.component.html',
  styleUrls: ['./product-detalis.component.css'],
})
export class ProductDetalisComponent implements OnInit {
  productId: any;
  product: any;
  constructor(
    public productService: BooksService,
    private activeRouter: ActivatedRoute,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.productId = this.activeRouter.snapshot.params['id'];
    this.productService.getBookById(this.productId).subscribe({
      next: (data) => {
        this.product = data;
      },
    });
  }
  backToProduct() {
    this.router.navigate(['/books']);
  }
}
