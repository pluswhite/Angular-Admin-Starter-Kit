import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class ReportsService {

  public requestUrl = "reports"

  constructor(
    public http: Http,
    private _tokenService: Angular2TokenService
  ) { }

  getTotalReportListData() {
    return this._tokenService
      .get(this.requestUrl);
  }
}
