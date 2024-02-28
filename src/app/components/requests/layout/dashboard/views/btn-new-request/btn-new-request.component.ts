import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MdlNewRequestComponent } from '../../../modals/mdl-new-request/mdl-new-request.component';

@Component({
  selector: 'btn-new-request',
  templateUrl: './btn-new-request.component.html',
  styleUrls: ['./btn-new-request.component.scss']
})
export class BtnNewRequestComponent {

   constructor(
      private config: NgbModalConfig,
      private modalService: NgbModal){

         config.backdrop = 'static';
         config.keyboard = false;
      }

   modalNewRequest(){
      this.modalService.open(MdlNewRequestComponent)
   }

}
