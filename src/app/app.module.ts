import { UserServiceService } from './service/user-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { HtmlTableComponent } from './html-table/html-table.component';

const routes: Routes = [
  { path: 'htmlTable', component: HtmlTableComponent },
  { path: 'smartTable', component: SmartTableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SmartTableComponent,
    HtmlTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    Ng2SmartTableModule
  ],
  providers: [
    UserServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
