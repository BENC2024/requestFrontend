import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Subscription, interval } from 'rxjs';
import { RequestClass } from 'src/app/shared/models/classes/request-class';
import { RequestService } from 'src/app/shared/services/request/request.service';

@Component({
  selector: 'preview-new-request',
  templateUrl: './preview-new-request.component.html',
  styleUrls: ['./preview-new-request.component.scss']
})
export class PreviewNewRequestComponent {
   datemoment: any
   private updateSubscription: Subscription | undefined; //Utilizar programacion reactiva para mostrar fecha en Real Time
   
   resumen?: RequestClass

   constructor(
      private requestService: RequestService,
      private modalService: NgbModal,
      private activeModal: NgbActiveModal
   ){}

   async ngOnInit(){
      console.log("Vista previa")
      this.obtainDate()
      this.requestService.returnPreview$().subscribe((data$) => {
            this.resumen = data$
         })
   }

   return(){
      this.unsubcribeDate()
      this.activeModal.close()
   }

   //OTRAS FUNCIONES
   private obtainDate(){
      this.updateSubscription = interval(1000).subscribe(() => {
         let dateStatus = new Date()
         this.datemoment = moment(dateStatus).format('L [-] LTS')
      });
   }

   private unsubcribeDate(){
      if (this.updateSubscription) {
         this.updateSubscription.unsubscribe();
         console.log("cerrando fechas")
      }
   }

   saveNewRequest(){
      this.resumen?.setdate( moment(new Date()).format('YYYY-MM-DDTHH:mm:ss.SSSZ') )
      this.requestService.saveNewRequest$(this.resumen).subscribe( 
         (data) => {
            (data)? alert('Solicitud creada exitosamente') : alert('Problema enviando solicitud')
         })
      this.modalService.dismissAll()
   }
}
