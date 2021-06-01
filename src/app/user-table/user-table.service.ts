import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dummyData } from './dummy-data-enum';

@Injectable({
  providedIn: 'root'
})
export class UserTableService {
  constructor(private _http: HttpClient) {}

  dataSource =
    'https://raw.githubusercontent.com/nareshadepu/mock-data/main/mock-data.json';

  getData() {
    return this._http.get<dummyData[]>(this.dataSource);
  }
}
