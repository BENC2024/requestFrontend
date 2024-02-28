import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   private getURIUser: string = "http://localhost:3000/listUser";
   private getURIOneUser: string = "http://localhost:3000/detailUser";

   constructor( private httpClient: HttpClient ) { }

   getUsers$(): Observable<any> {
      return this.httpClient.get(this.getURIUser)
   }

   detailUsers$(id:string): Observable<any>{
      return this.httpClient.get(`${this.getURIOneUser}/${id}`)
   }
}
