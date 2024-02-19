import { Component, inject, OnInit } from '@angular/core';
import { EmpServiceFileService } from '../emp-service-file.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { FilterComponent } from './filter/filter.component';
import { CommonModule } from '@angular/common';
import { IProduct } from '../product';
@Component({
  selector: 'app-product-card-container',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, FilterComponent],
  templateUrl: './product-card-container.component.html',
  styleUrl: './product-card-container.component.css',
})
export class ProductCardContainerComponent implements OnInit {
  _productData = inject(EmpServiceFileService);

  public selectedProduct: IProduct;

  selectMyProduct(product: IProduct) {
    this.selectedProduct = product;
  }

  public products: any[] = [];
  public total: number;
  public soldcount: number;
  public unsoldcount: number;

  ngOnInit(): void {
    this.products = this._productData.getProducts();
    this.total = this.products.length;
    this.soldcount = this.products.filter(
      (product) => product.sold === true
    ).length;
    this.unsoldcount = this.products.filter(
      (product) => product.sold === false
    ).length;
  }

  public filterOption: string = 'all';

  optionChanges(value: string) {
    this.filterOption = value;
  }
}
