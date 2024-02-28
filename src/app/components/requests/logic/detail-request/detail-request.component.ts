import { Component, Input } from '@angular/core';
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

   authorize(){}
   denied(){}
   finalize(){}
   sendInvoice(){}


   //OTRAS FUNCIONES

}
