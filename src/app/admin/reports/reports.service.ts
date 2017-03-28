import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class ReportsService {

  // public requestUrl = "reports"
  public requestUrl = "/mock-data/report-list-mock.json";

  constructor(
    public http: Http,
    private _tokenService: Angular2TokenService
  ) { }

  getTotalReportListData(search?:any) {
    search = search || {};
    // console.log(search);
    // return this._tokenService.post(this.requestUrl, search);
    return this.http.get(this.requestUrl, search);
  }
}
