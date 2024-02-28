import { RequestInterface } from "../interfaces/request-interface";

export class RequestClass implements RequestInterface {

   //Mantener el orden
   _id: any
   requestId?: any
   tenantId?: any
   thirdPartiesId: any
   userId?: any 
   categoryId: any 
   statusId: any 
   description: any
   amount: any
   date?: any
   invoice? : any

   constructor(
      thirdPartiesId: any,
      categoryId: any,
      statusId: any,
      description: any,
      amount: any,
      tenantId?: any,
      userId?: any ,
      date?: any,
      invoice?: any )
   {
      this.thirdPartiesId = thirdPartiesId;
      this.categoryId = categoryId;
      this.statusId = statusId;
      this.description = description;
      this.amount = amount;
      this.tenantId = tenantId;
      this.userId = userId;
      this.date = date;
      this.invoice = invoice;
   }

   set setthirdPartiesId(thirdPartiesId:any){
      this.thirdPartiesId = thirdPartiesId;
   }
   set setcategoryId(categoryId: any){
      this.categoryId = categoryId;
   }
   set setstatusId(statusId: any){
      this.statusId = statusId;
   }
   set setdescription(description: any){
      this.description = description;
   }
   set setamount(amount: any){
      this.amount = amount;
   }
   set settenantId(tenantId: any){
      this.tenantId = tenantId;
   }
   set setuserId(userId: any){
      this.userId = userId;
   }
   set setdate(date:any){
      this.date = date
   }
   set setinvoice(invoice: any){
      this.invoice = invoice;
   }

   get getid(){
      return this._id
   }
   get getrequestId(){
      return this.requestId
   }
   get getthirdParties(){
      return this.thirdPartiesId
   }
   get getcategory(){
      return this.categoryId
   }
   get getstatus(){
      return this.statusId
   }
   get getdescription(){
      return this.description
   }
   get getamount(){
      return this.amount
   }
   get gettenant(){
      return this.tenantId
   }
   get getuser(){
      return this.userId
   }
   get getdate(){
      return this.date
   }
   get getinvoice(){
      return this.invoice
   }

}


/*
constructor(
   tenantId: string,
   thirdPartiesId: any,
   userId: any ,
   categoryId: any ,
   statusId: any ,
   description: string,
   amount: number,
   date: Date,
   invoice : string )
{
   this.tenantId = tenantId;
   this.thirdPartiesId = thirdPartiesId;
   this.userId = userId;
   this.categoryId = categoryId;
   this.statusId = statusId;
   this.date = date;
   this.description = description;
   this.amount = amount;
   this.invoice = invoice;
}
*/
