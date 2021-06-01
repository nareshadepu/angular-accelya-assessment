import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DialogBoxService } from './dialog-box/dialog-box.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private modalService: DialogBoxService) {}

  ngOnInit(): void {}

  openModal(id: string) {
    this.modalService.open(id);
    console.log(id);
  }
}
