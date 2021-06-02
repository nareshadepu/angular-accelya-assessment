import {
  Component,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';

import { DialogBoxService } from './dialog-box.service';
// import { dummyData } from '../user-table/dummy-data.enum';

@Component({
  selector: 'dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogBoxComponent implements OnInit {
  @Input() id: string;
  @Input() header: string;
  @Input() modalHeightWidth: any;
  @Input() searchFilter: boolean;
  @Input() sourceData: any;
  @Input() gridCustomWidth: any;
  @Input() footer: any;

  //@Output() testVariable = new EventEmitter();
  testVariable: EventEmitter<any> = new EventEmitter();

  element: any;
  gridApi: any;
  gridColumnApi: any;
  searchValue: string;
  constructor(private modalService: DialogBoxService, private el: ElementRef) {
    this.element = el.nativeElement;
  }
  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('dialog-box-open');
  }

  closeModal() {
    this.modalService.close(this.element.id);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  ngOnInit(): void {
    this.modalService.add(this);
  }

  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('dialog-box-open');
  }
}
