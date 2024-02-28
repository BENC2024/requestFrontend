import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

   private getURICompany: string = "http://localhost:3000/listCompany";
   private getURIOneCompany: string = "http://localhost:3000/detailCompany";

   constructor( private httpClient: HttpClient ) { }

   listCompany$(): Observable<any> {
      console.log("en el listado")
      return this.httpClient.get(this.getURICompany)
   }

   detailCompany$(id:string): Observable<any> {
      return this.httpClient.get(`${this.getURIOneCompany}/${id}`)
   }
}
