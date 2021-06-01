import { Component, OnInit } from '@angular/core';
import { UserTableService } from './user-table.service';
import { dummyData } from './dummy-data.enum';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  userData: dummyData[] = [];
  productName: any;
  key: string = 'id';
  reverse: boolean = false;
  p: number = 1;
  constructor(private HttpService: UserTableService) {}

  ngOnInit(): void {
    this.HttpService.getData().subscribe((response: any) => {
      this.userData = response;
      console.log(this.userData);
    });
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
