import { Component, EventEmitter, Output } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request/request.service';

@Component({
  selector: 'panel-search',
  templateUrl: './panel-search.component.html',
  styleUrls: ['./panel-search.component.scss']
})
export class PanelSearchComponent {

   constructor(
      private requestService: RequestService ){
   }

   //Variables de busqueda: //newItemEvent = new EventEmitter<string>();
   @Output() categoryEvent = new EventEmitter<string>();
   @Output() statusEvent = new EventEmitter<string>();
   @Output() wordEvent = new EventEmitter<string>();

   category_s: string = ''
   state_s: string = ''
   word_s: string = ''

   protected listCategory: any[] = []
   protected listStatus: any[] = []

   async ngOnInit(){
     
      this.requestService.search$().subscribe( (data$) => {
         this.listCategory = data$.category$
         this.listStatus = data$.status$
      })
   }

   //Emitiendo valor
   emitingCategory(){
      this.categoryEvent.emit( this.category_s )
   }
   emitingState(){
      this.statusEvent.emit( this.state_s )
   }
   emitingWord(){
      this.wordEvent.emit( this.word_s )
   }

}
