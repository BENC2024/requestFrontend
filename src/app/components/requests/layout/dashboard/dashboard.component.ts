import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

   category_s: string = ''
   state_s: string = ''
   word_s: string = ''

      //Variables de busqueda: //newItemEvent = new EventEmitter<string>();
   @Output() categoryEvent = new EventEmitter<string>();
   @Output() stateEvent = new EventEmitter<string>();
   @Output() wordEvent = new EventEmitter<string>();

   constructor(){}

   ngOnDestroy(){}

   //Emitiendo valor
   emitingCategory(){
      this.categoryEvent.emit( this.category_s )
   }
   emitingState(){
      this.stateEvent.emit( this.state_s )
   }
   emitingWord(){
      this.wordEvent.emit( this.word_s )
   }

}
