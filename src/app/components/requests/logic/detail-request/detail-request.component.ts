import { Component, Input } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { RequestClass } from 'src/app/shared/models/classes/request-class';
import { RequestService } from 'src/app/shared/services/request/request.service';

@Component({
  selector: 'detail-request',
  templateUrl: './detail-request.component.html',
  styleUrls: ['./detail-request.component.scss']
})
export class DetailRequestComponent {

   //Id de la solicitud que llega de la tabla
   @Input() _id: string = ""

   date: any
   request?: RequestClass

   constructor(
      private requestService: RequestService,
      private modalService: NgbModal,
      protected activeModal: NgbActiveModal )
      {}

   async ngOnInit(){
      this.requestService.detailRequest$(this._id).subscribe( (data$) => {
         this.request = data$
      })
      this.date = moment(this.request?.getdate()).format('L [-] LTS')
   }

   close(){
      this.activeModal.close()
   }

   ngOnDestroy(){
      console.log("Cerrando detalle")
   }

   authorize(){
      let idStatus = ''
      this.requestService.updateRequestStatus$(this.request?._id).subscribe( 
         (data) => {
            (data)? alert('Solicitud creada exitosamente') : alert('Problema enviando solicitud')
         })
      this.modalService.dismissAll()
   }
   denied(){
      let idStatus = ''
      this.requestService.updateRequestStatus$(this.request?._id).subscribe( 
         (data) => {
            (data)? alert('Solicitud creada exitosamente') : alert('Problema enviando solicitud')
         })
      this.modalService.dismissAll()
   }
   finalize(){
      let idStatus = ''
      this.requestService.updateRequestStatus$(this.request?._id).subscribe( 
         (data) => {
            (data)? alert('Solicitud creada exitosamente') : alert('Problema enviando solicitud')
         })
      this.modalService.dismissAll()
   }
   sendInvoice(){
      this.requestService.updateRequestInvoice$(this.request?._id, this.formRequest.value['file_v']).subscribe( 
         (data) => {
            (data)? alert('Solicitud creada exitosamente') : alert('Problema enviando solicitud')
         })
      this.modalService.dismissAll()
   }

   //OTRAS FUNCIONES
   formRequest = new FormGroup({
      'file_v': new FormControl('', [
         Validators.required
      ])
   })
   //getter de validaciones
   get file_v(){ return this.formRequest.get('file_v') as FormControl }

}
