import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MsgCenterService {

  private requestUrl = "/mock-data/msgs-mock.json";

  constructor(
    private _http: Http
  ) { }

  getMsgListData() {
    return this._http.get(this.requestUrl);
  }
}
