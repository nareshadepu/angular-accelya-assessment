import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  total: any;
  pageSize: number = 10;
  totalItems = [10, 20, 30, 50, 100];
  @Input() public getSourceData: string;
  @Input() searchFilter: boolean;
  @Input() footer: boolean;

  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;
  @Output() pageBoundsCorrection: EventEmitter<number>;
  someUrl: string;
  constructor(private HttpService: UserTableService) {}

  ngOnInit(): void {
    this.HttpService.getData().subscribe((response: any) => {
      this.userData = response;
      this.total = response.length;
    });
    this.HttpService.getSourceData(this.getSourceData);
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  onChange(event) {
    this.pageSize = event.target.value;
    console.log(event.target.value);
  }

  checkAllCheckBox(ev) {
    this.userData.forEach(x => (x.checked = ev.target.checked));
    console.log(ev.target.checked);
  }

  isAllCheckBoxChecked() {
    return this.userData.every(p => p.checked);
  }
}
