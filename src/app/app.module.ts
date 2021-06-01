import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { Ng2OrderModule } from 'ng2-order-pipe';
// import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // Ng2SearchPipeModule,
    // Ng2OrderModule,
    // NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DialogBoxComponent,
    UserTableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
