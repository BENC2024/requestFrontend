import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/requests/layout/dashboard/dashboard.component';
import { DetailRequestComponent } from './components/requests/logic/detail-request/detail-request.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
   { path:"", component: DashboardComponent },
   { path:"home", component: HomeComponent },
   { path:"detalle", component: DetailRequestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
