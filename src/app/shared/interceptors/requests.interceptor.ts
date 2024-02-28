import { Injectable } from '@angular/core';
import {
   HttpRequest,
   HttpHandler,
   HttpEvent,
   HttpInterceptor,
   HttpResponse
} from '@angular/common/http';

import Swal from 'sweetalert2'

import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RequestsInterceptor implements HttpInterceptor {

   constructor( private routes: Router) {}
   
   intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

      const token = localStorage.getItem('token');
      let request = req;

      if (token) {
         request = req.clone({
            setHeaders: {
               authorization: `Bearer ${ token }`
            }
         });
      }

      return next.handle(request).pipe(
         tap(
           event => {
             // Manipulación de la respuesta
             if (event instanceof HttpResponse) {
               console.log('Respuesta exitosa:', event);
               // Puedes realizar modificaciones en la respuesta aquí
             }
           },
           error => {
             // Manipulación de errores de respuesta
             console.error('Error en la respuesta:', error);
             Swal.fire("No se puede guardar la solicitud");
             this.routes.navigate(['/'])
           }
         )
      )
   }
}
