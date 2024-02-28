import { RequestInterface } from "../interfaces/request-interface";

export class RequestClass implements RequestInterface {

   //Mantener el orden
   _id?: any
   tenanId?: any
   solicitudId?: any
   terceroId: any
   categoriaId: any 
   estadoId: any 
   detalle: any
   valor: any
   fecha?: any
   facturaUrl? : any


   constructor(
      thirdPartiesId: any,
      categoryId: any,
      statusId: any,
      description: any,
      amount: any,
      date: any,
      invoice: any,
      _id?: any)
   {
      this._id = _id
      this.terceroId = thirdPartiesId;
      this.categoriaId = categoryId;
      this.estadoId = statusId;
      this.detalle = description;
      this.valor = amount;
      this.fecha = date;
      this.facturaUrl = invoice;
   }
   set setthirdPartiesId(thirdPartiesId:any){
      this.terceroId = thirdPartiesId;
   }
   set setcategoryId(categoryId: any){
      this.categoriaId = categoryId;
   }
   set setstatusId(statusId: any){
      this.estadoId = statusId;
   }
   set setdescription(description: any){
      this.detalle = description;
   }
   set setamount(amount: any){
      this.valor = amount;
   }
   set setdate(date:any){
      this.fecha = date
   }
   set setinvoice(invoice: any){
      this.facturaUrl = invoice;
   }

   get getid(){
      return this._id
   }
   get getthirdParties(){
      return this.terceroId
   }
   get getcategory(){
      return this.categoriaId
   }
   get getstatus(){
      return this.estadoId
   }
   get getdescription(){
      return this.detalle
   }
   get getamount(){
      return this.valor
   }
   get getdate(){
      return this.fecha
   }
   get getinvoice(){
      return this.facturaUrl
   }

}

