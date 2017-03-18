import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ApiKeys } from './api-keys';

@Injectable()
export class BaseDataService {
  constructor(private http: Http) { }

  get(url: string) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(url, {
      headers: headers
    })
    .map(res => res.json());
  }

  private createAuthorizationHeader(headers: Headers) {
    headers.append('X-API-Key', ApiKeys.proPublica);
  }
}
