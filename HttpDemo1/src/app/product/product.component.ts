import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/RX';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataSource: Observable<any>;
  products: Array<any> = [];

  constructor(private http: Http) {
    this.dataSource = this.http.get('/api/products')
      .map((res) => res.json());
  }

  ngOnInit() {
    this.dataSource.subscribe(
      (data) => this.products = data
    );
  }

}
