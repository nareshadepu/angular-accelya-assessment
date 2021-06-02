import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dummyData } from './dummy-data.enum';

@Injectable({
  providedIn: 'root'
})
export class UserTableService {
  constructor(private _http: HttpClient) {}
  getSourceDataUrl: string = '';

  getSourceData(url) {
    this.getSourceDataUrl = url;
    console.log(this.getSourceDataUrl);
  }

  getData(url) {
    return this._http.get<dummyData[]>(url);
  }
  //https://raw.githubusercontent.com/nareshadepu/mock-data/main/mock-data.json
}
