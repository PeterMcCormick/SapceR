import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServiceProvider {

  url: string = "http://localhost:8080/";
  data;


  constructor(public http: HttpClient) {

  }

  async get(domain: string){
    await this.http.get(this.url + domain).toPromise().then(data => this.data = data);
    return this.data;
  }
}
