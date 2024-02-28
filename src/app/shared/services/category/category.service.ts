import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

   private getURICategory: string = "http://localhost:3000/listCategory";
   private getURIOneCategory: string = "http://localhost:3000/detailCategory"

   constructor( private httpClient: HttpClient ) { }

   listCategory$(): Observable<any> {
      return this.httpClient.get(this.getURICategory)
   }

   detailCategory$(id: any): Observable<any> {
      return this.httpClient.get(`${this.getURIOneCategory}/${id}`)
      //return firstValueFrom(this.httpClient.get(this.getURICategory/*+"/"+id*/))
   }
}
