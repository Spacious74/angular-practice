import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product';

@Injectable()
export class EmpServiceFileService {
  private _url: string =
    'https://s3.amazonaws.com/roxiler.com/product_transaction.json';

  constructor(private http: HttpClient) {}

  productList: IProduct[] = [];

  getProducts(): IProduct[] {
    this.http.get<IProduct[]>(this._url).subscribe(
      (data) => (this.productList = data),
      (err) => {
        console.log('Error hai : ', err);
      }
    );
    return this.productList;
  }
}
