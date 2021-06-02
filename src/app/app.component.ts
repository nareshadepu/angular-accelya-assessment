;import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DialogBoxService } from './dialog-box/dialog-box.service';
// import userData from './dummy-data.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userData: any;
  constructor(private modalService: DialogBoxService) {}

  ngOnInit(): void {
    //this.userData = userData;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
}
