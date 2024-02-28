import { Component, Input } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { RequestService } from 'src/app/shared/services/request/request.service';
import { DetailRequestComponent } from '../detail-request/detail-request.component';
import { RequestClass } from 'src/app/shared/models/classes/request-class';

@Component({
  selector: 'table-list-request',
  templateUrl: './table-list-request.component.html',
  styleUrls: ['./table-list-request.component.scss']
})
export class TableListRequestComponent {
   
   //Metodos de busqueda
   @Input() category_s: string = ''
   @Input() state_s: string = ''
   @Input() word_s: string = ''

   constructor(
      private requestService: RequestService,
      private modalService: NgbModal,
      private config: NgbModalConfig ){
         config.backdrop = 'static';
         config.keyboard = false;
      }

   protected listRequest: RequestClass[] = []

   async ngOnInit(){
      this.requestService.listRequest$().subscribe( (data$) => {
         this.listRequest = data$
      })

      for (let i = 0; i < this.listRequest.length; i++) {
         this.listRequest[i].setdate( moment(this.listRequest[i].getdate()).startOf('day').fromNow() ) 
      }
      console.log("componente detalle")
   }

   detailRequest(id:string){
      const modalRef = this.modalService.open( DetailRequestComponent )
      modalRef.componentInstance._id = id
   }

}
