import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

   private getURIStatus: string = "http://localhost:3000/listStatus";
   private getURIOneStatus: string = "http://localhost:3000/detailStatus";

   constructor( private httpClient: HttpClient ) { }

   listStatus$(): Observable<any> {
      return this.httpClient.get(this.getURIStatus)
   }

   detailStatus$(id:string): Observable<any> {
      return this.httpClient.get(`${this.getURIOneStatus}/${id}`)
      
      //return firstValueFrom(this.httpClient.get(this.getURIState/*+"/"+id*/))
   }
}
