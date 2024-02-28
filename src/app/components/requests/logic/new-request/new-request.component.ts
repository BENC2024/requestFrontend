import { Component, Input } from '@angular/core';

import { FormControl,FormGroup,Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { RequestService } from 'src/app/shared/services/request/request.service';

import { Subscription } from 'rxjs';
import { MdlPreviewNewRequestComponent } from '../../layout/modals/mdl-preview-new-request/mdl-preview-new-request.component';
import { RequestClass } from 'src/app/shared/models/classes/request-class';

@Component({
  selector: 'new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss']
})

export class NewRequestComponent {

   protected dataCategory: any = []
   protected dataThirdParties: any = []

   constructor(
      private requestService: RequestService,
      private modalService: NgbModal,
      private activeModal: NgbActiveModal
   ){}

   //Listado de subscripciones para el consumo de memoria
   private requestSubscription?: Subscription

   requestNew?: RequestClass; //Para guardar la nueva solicitud

   protected objThird: any
   protected objCategory: any

   async ngOnInit(){
      console.log("Cargando servicios de nueva solicitud")
      this.requestService.newRequest$().subscribe( (data$) =>{
         this.dataCategory = data$;
      })
   }

   previewRequest(){

      let idStatus = '' //Estados de una solicitud es : Pendiente, En proceso, Aprobado, Denegado

      this.requestNew = new RequestClass(
         this.dataThirdParties._id,
         this.formRequest.value['category_v'],
         idStatus,
         this.formRequest.value['description_v'],
         this.formRequest.value['amount_v'],
      )

      this.requestService.previewRequest$(this.requestNew)

      const previewModal = this.modalService.open( MdlPreviewNewRequestComponent )
   }

   cancel(){
      this.formRequest.reset()
      this.activeModal.close()
      console.log("Cancelando formulario")
   }

   ngOnDestroy(){
      this.unsubscribeServices()
   }

   subscribeUpdate(){
      console.log("Cargando servicios de actualizacion")
   }

   unsubscribeServices(){
      this.requestSubscription?.unsubscribe()
      console.log("Cancelando servicios")
   }

   //VALIDACIONES
   formRequest = new FormGroup({
      'nameThirdParties_v': new FormControl('', [
         Validators.required,
         // this.validarOpcion.bind(this)
       ]),
      'amount_v': new FormControl(0, [
         Validators.required,
         Validators.min(1000),   //Monto minimo en el que se puede hacer una solicitud de gasto
         Validators.max(1000000), //Monto maximo en el que se puede hacer una solicitud de gasto
         Validators.pattern(/^-?[0-9]\d*(\d+)?$/)
       ]),
      'description_v': new FormControl('',[
         Validators.required,
         Validators.minLength(10),
         Validators.maxLength(201),
      ]),
      'category_v': new FormControl('',[
         Validators.required,
      ])
   })
   //getter de validaciones
   get nameThirdParties_v(){ return this.formRequest.get('nameThirdParties_v') as FormControl }
   get amount_v(){ return this.formRequest.get('amount_v') as FormControl } // as para evitar el uso de condicionales en el template
   get description_v(){ return this.formRequest.get('description_v') as FormControl }
   get category_v(){ return this.formRequest.get('category_v')  as FormControl }


   // validarOpcion(control: FormControl): {[key: string]: any} | null {
   //    if (!this.dataThirdParties.nombreTercero.includes(control.value)) {
   //      return { 'opcionInvalida': true };
   //    }
   //    return null;
   // }

}
