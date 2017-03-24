import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DashboardService {

  private requestDataUrl: string = "/mock-data/dashboard-mock.json";

  constructor(
    private _http: Http
  ) { }

  getData() {
    return this._http.get(this.requestDataUrl)
      .map(res => res.json());
  }
}
