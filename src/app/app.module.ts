import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DialogBoxComponent, UserTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
