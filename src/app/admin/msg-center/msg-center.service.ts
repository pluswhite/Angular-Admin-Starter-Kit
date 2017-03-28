import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MsgCenterService {

  private requestUrl = "/mock-data/msgs-mock.json";

  constructor(
    private _http: Http
  ) { }

  getMsgListData(id) {
    id = id || '';
    console.log(id);
    return this._http.get(this.requestUrl + '?id=' + id);
  }
}
