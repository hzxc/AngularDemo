import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/RX';

@Injectable()
export class ItemService {

  constructor(private http: Http) { }

  private baseUrl = "api/items/";  // web api URL 

  getLatest(num?: number) {
    var url = this.baseUrl + "GetLatest/";
    if (num != null) { url += num; }
    console.log(this.http.get(url).map(response => response.json()));
    let headers:Headers = new Headers();
    headers.append('accept','application/json');
    return this.http.get(url,{headers:headers})
      .map(response => response.json())
      .catch(this.handleError);
  }

  // calls the [GET] /api/items/GetMostViewed/{n} Web API method to retrieve the most viewed items.
  getMostViewed(num?: number) {
    var url = this.baseUrl + "GetMostViewed/";
    if (num != null) { url += num; }
    return this.http.get(url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  // calls the [GET] /api/items/GetRandom/{n} Web API method to retrieve n random items.
  getRandom(num?: number) {
    var url = this.baseUrl + "GetRandom/";
    if (num != null) { url += num; }
    return this.http.get(url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  // calls the [GET] /api/items/{id} Web API method to retrieve the item with the given id.
  get(id: number) {
    if (id == null) { throw new Error("id is required."); }
    var url = this.baseUrl + id;
    return this.http.get(url)
      .map(res => <Item>res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // output errors to the console.
    console.error(error);
    return Observable.throw(error.json() || "Server error");
  }
}

export class Item {
  constructor(
    public Id: number,
    public Title: string,
    public Description: string
  ) { }
}
