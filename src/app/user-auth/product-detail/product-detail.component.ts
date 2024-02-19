import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h3>Product details - {{ productId }} - {{ name }}</h3>
    <div class="btncont">
      <button (click)="showMoreDetails()">
        More details about this product
      </button>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class ProductDetailComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  public productId: number = 0;
  public name: string = '';
  ngOnInit() {
    let id: any = this.route.snapshot.paramMap.get('id');
    id = parseInt(id);
    this.productId = id;
  }
  showMoreDetails() {
    this.router.navigate(['more-details'], {relativeTo : this.route});
  }
}
