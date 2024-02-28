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

      formRequest = new FormGroup({
         'file_v': new FormControl('', [
            Validators.required
         ])
      })
      get file_v(){ return this.formRequest?.get('file_v') as FormControl }

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
      let idStatus = '65d6a435c04706dd1cdafd6d' //APROBADO
      this.requestService.updateRequestStatus$(this.request?._id).subscribe( 
         (data) => {
            (data)? alert('Solicitud autorizada') : alert('Problema con el cambio de estado de la solicitud')
         })
      this.modalService.dismissAll()
   }
   denied(){
      let idStatus = '65d6a473c04706dd1cdafd6f' //RECHAZADO
      this.requestService.updateRequestStatus$(this.request?._id).subscribe( 
         (data) => {
            (data)? alert('Solicitud creada exitosamente') : alert('Problema con el cambio de estado de la solicitud')
         })
      this.modalService.dismissAll()
   }
   finalize(){
      let idStatus = '65d6a464c04706dd1cdafd6e' //FINALIZADO
      this.requestService.updateRequestStatus$(this.request?._id).subscribe( 
         (data) => {
            (data)? alert('Solicitud creada exitosamente') : alert('Problema con el cambio de estado de la solicitud')
         })
      this.modalService.dismissAll()
   }
   sendInvoice(){
      const formData = new FormData();
      formData.append('archivo', this.formRequest.value['file_v']);
      this.requestService.updateRequestInvoice$(this.request?._id,formData).subscribe( 
         (data) => {
            (data)? alert('Factura enviada') : alert('Problema enviando factura')
         })
      this.modalService.dismissAll()
   }

   deleteRequests(){
      this.requestService.detailRequest$(this.request?._id).subscribe( 
         (data) => {
            (data)? alert('Solicitud borrada exitosamente') : alert('Problemas borrando factura')
      })
      this.modalService.dismissAll()
   }


}
