import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserTableService } from './user-table.service';
import { dummyData } from './dummy-data.enum';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
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
  //@Input() maxSize: number;
  constructor(private HttpService: UserTableService) {}

  ngOnInit(): void {
    this.HttpService.getData(this.getSourceData).subscribe((response: any) => {
      this.userData = response;
      this.total = response.length;
    });
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  onChange(event) {
    this.pageSize = event.target.value;
  }

  checkAllCheckBox(ev) {
    this.userData.forEach(x => (x.checked = ev.target.checked));
  }

  isAllCheckBoxChecked() {
    return this.userData.every(checkBox => checkBox.checked);
  }
}
