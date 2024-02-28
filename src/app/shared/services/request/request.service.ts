import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, forkJoin, map, mergeMap, of, throwError } from 'rxjs';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestClass } from '../../models/classes/request-class';

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
      return this.httpClient.get(`${this.baseURI}/listCategory`).pipe(   // Listado de categorias
         mergeMap( (data1) => this.httpClient.get(`${this.baseURI}/listStatus`).pipe(
            map( (data2) => ( {category$: data1, status$: data2} ) )   //Listado de estados
         ))
      )
   }

   newRequest$():Observable<any>{ // METODO AL MOMENTO DE HACER UNA NUEVA SOLICITUD. SE CONSULTA USUARIO, CATEGORIA, ESTADO, TERCEROS, EMPRESA ...
      this.listadoCategorias = this.httpClient.get(`${this.baseURI}/listCategory`).pipe(
         catchError(
            e => {
               alert('No se puede obtener categorias para nueva solicitud')
               return (e)
            } 
         )
      )
      this.listadoTerceros = this.httpClient.get(`${this.baseURI}/listThirdParties`).pipe(
         catchError(
            e => {
               alert('No se puede obtener listado de terceros para nueva solicitud')
               return (e)
            } 
         )
      )
      return forkJoin([this.listadoCategorias,this.listadoTerceros])
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
               alert('Ha ocurrido un error creado solicitud')
               return e
            })
      )
   }

   listRequest$(): Observable<any>{
      return this.httpClient.get(`${this.baseURI}/listRequest`).pipe(
         catchError(
            e => {
               alert('Ha ocurrido un error listando solicitudes')
               return e
            })
      )
   }

   detailRequest$(id:string): Observable<any>{
      return this.httpClient.get(`${this.baseURI}/detailRequest/${id}`).pipe(
         catchError(
            e => {
               alert('Ha ocurrido un error detallando solicitud')
               return e
            })
      )
   }

   updateRequest$(id:string, resumen?: RequestClass): Observable<any>{
      return this.httpClient.put(`${this.baseURI}/updateRequest/${id}`,resumen).pipe(
         catchError(
            e => {
               alert('Ha ocurrido un error actualizando solicitud')
               return e
            })
      )
   }

   deleteRequest$(id:string): Observable<any>{
      return this.httpClient.delete(`${this.baseURI}/deleteRequest/${id}`).pipe(
         catchError(
            e => {
               alert('Ha ocurrido un error borrando solicitud')
               return e
            })
      )
   }

}
