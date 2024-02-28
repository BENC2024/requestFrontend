import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartiesService {

   private getURIThirdParties: string = "http://localhost:3000/listThirdParties";
   private getURIOneThirdParties: string = "http://localhost:3000/detailThirdParties";

   constructor( private httpClient: HttpClient ) { }

   listThirdParties$(): Observable<any> {
      return this.httpClient.get(this.getURIThirdParties)
   }

   detailThirdParties$(id:string): Observable<any> {
      return this.httpClient.get(`${this.getURIOneThirdParties}/${id}`)
   }

}
