import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetalisComponent } from './product-detalis.component';

describe('ProductDetalisComponent', () => {
  let component: ProductDetalisComponent;
  let fixture: ComponentFixture<ProductDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetalisComponent]
    });
    fixture = TestBed.createComponent(ProductDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
