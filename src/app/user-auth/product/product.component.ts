import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpServiceFileService } from '../emp-service-file.service';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe, DecimalPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  public products: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;

  _productData: any = inject(EmpServiceFileService);

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.products = this._productData.getProducts();
    this.getDisplayedProducts();
  }

  getDisplayedProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products.slice(startIndex, endIndex);
  }

  nextPage(): void {
    const totalPages = Math.ceil(this.products.length / this.itemsPerPage);
    this.currentPage = Math.min(this.currentPage + 1, totalPages);
  }

  prevPage(): void {
    this.currentPage = Math.max(this.currentPage - 1, 1);
  }

  onSelect(prod: any) {
    this.router.navigate([prod.id], { relativeTo: this.route });
  }
}
