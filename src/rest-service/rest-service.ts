import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServiceProvider {

  http: HttpClient;
  url;
  constructor(url: string) {
    this.url = url;

  }

  get(){
    return this.http.get(this.url);
  }
}
