import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/RX';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  products: Observable<any>;

  constructor(private http: Http) {
    let headers:Headers = new Headers();
    headers.append('accept','application/json');
    this.products = this.http.get('/api/products',{headers:headers})
      .map((res) => res.json());
  }

  ngOnInit() {
   
  }
}
