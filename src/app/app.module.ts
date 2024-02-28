import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/requests/layout/dashboard/dashboard.component';
import { MdlDetailRequestComponent } from './components/requests/layout/modals/mdl-detail-request/mdl-detail-request.component';
import { MdlNewRequestComponent } from './components/requests/layout/modals/mdl-new-request/mdl-new-request.component';
import { BtnNewRequestComponent } from './components/requests/layout/dashboard/views/btn-new-request/btn-new-request.component';
import { PanelSearchComponent } from './components/requests/layout/dashboard/views/panel-search/panel-search.component';
import { TableRequestComponent } from './components/requests/layout/dashboard/views/table-request/table-request.component';
import { NewRequestComponent } from './components/requests/logic/new-request/new-request.component';
import { DetailRequestComponent } from './components/requests/logic/detail-request/detail-request.component';
import { PreviewNewRequestComponent } from './components/requests/logic/preview-new-request/preview-new-request.component';
import { TableListRequestComponent } from './components/requests/logic/table-list-request/table-list-request.component';
import { MdlPreviewNewRequestComponent } from './components/requests/layout/modals/mdl-preview-new-request/mdl-preview-new-request.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MdlDetailRequestComponent,
    MdlNewRequestComponent,
    BtnNewRequestComponent,
    PanelSearchComponent,
    TableRequestComponent,
    NewRequestComponent,
    DetailRequestComponent,
    PreviewNewRequestComponent,
    TableListRequestComponent,
    MdlPreviewNewRequestComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
