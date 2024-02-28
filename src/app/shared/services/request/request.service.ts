import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, forkJoin, map, mergeMap, of, throwError } from 'rxjs';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestClass } from '../../models/classes/request-class';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

   private baseURI: string = "";

   private listadoCategorias: any = []
   private listadoTerceros: any = []

   private resumenSubject$: Subject<RequestClass> = new Subject<RequestClass>()

   constructor( private httpClient: HttpClient )
   {
      this.baseURI = "http://localhost:3000"
   }

   //El signo de peso es por buenas practicas del observable
   request$?: RequestClass

   search$():Observable<{ category$: any, status$: any }>{
      return this.httpClient.get(`${this.baseURI}/obtenerTodasLasCategorias`).pipe(   // Listado de categorias
         mergeMap( (data1) => this.httpClient.get(`${this.baseURI}/obtenerTodasLosEstados`).pipe(
            map( (data2) => ( {category$: data1, status$: data2} ) )  //Listado de estados
         ))
      )
   }

   newRequest$():Observable<{ category$: any, third$: any }>{ // METODO AL MOMENTO DE HACER UNA NUEVA SOLICITUD. SE CONSULTA USUARIO, CATEGORIA, ESTADO, TERCEROS, EMPRESA ...
      return this.httpClient.get(`${this.baseURI}/obtenerTodasLasCategorias`).pipe(   // Listado de categorias
         mergeMap( (data1) => this.httpClient.get(`${this.baseURI}/obtenerTodosLosTerceros`).pipe(
            map( (data2) => ( {category$: data1, third$: data2} ) )   //Listado de terceros
         ))
      )
   }

   //Metodos para la vista previa
   previewRequest$(request: RequestClass){
      this.request$ = request
      this.resumenSubject$.next(this.request$)
   }
   returnPreview$():Observable<any>{
      return this.resumenSubject$
   }


   saveNewRequest$(resumen?: RequestClass):Observable<any>{
      return this.httpClient.post(`${this.baseURI}/saveRequest`,resumen).pipe(
         catchError(
            e => {
               Swal.fire("No se puede guardar la solicitud");
               return e
            })
      )
   }

   listRequest$(): Observable<any>{
      return this.httpClient.get(`${this.baseURI}/obtenerTodasLasSolicitudes`).pipe(
         catchError(
            e => {
               Swal.fire("No se puede acceder a las categorias");
               return e
            })
      )
   }

   detailRequest$(id:string): Observable<any>{
      return this.httpClient.get(`${this.baseURI}/obtenerSolicitud/${id}`).pipe(
         catchError(
            e => {
               alert('Ha ocurrido un error detallando solicitud')
               return e
            })
      )
   }

   updateRequest$(id:string, resumen?: RequestClass): Observable<any>{
      return this.httpClient.put(`${this.baseURI}/modificarSolicitud/${id}`,resumen).pipe(
         catchError(
            e => {
               alert('Ha ocurrido un error actualizando solicitud')
               return e
            })
      )
   }

   updateRequestStatus$(id:string, resumen?: RequestClass): Observable<any>{
      return this.httpClient.put(`${this.baseURI}/modificarEstadoSolicitud/${id}`,resumen).pipe(
         catchError(
            e => {
               alert('Ha ocurrido un error actualizando solicitud')
               return e
            })
      )
   }

   updateRequestInvoice$(id:string, factura: any): Observable<any>{
      return this.httpClient.post(`${this.baseURI}/guardarFactura/${id}`,factura).pipe(
         catchError(
            e => {
               alert('Ha ocurrido un error actualizando solicitud')
               return e
            })
      )
   }

   deleteRequest$(id:string): Observable<any>{
      return this.httpClient.delete(`${this.baseURI}/eliminarSolicitud/${id}`).pipe(
         catchError(
            e => {
               alert('Ha ocurrido un error borrando solicitud')
               return e
            })
      )
   }

}
