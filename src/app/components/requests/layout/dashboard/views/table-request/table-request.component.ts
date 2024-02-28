import { Component, Input } from '@angular/core';

@Component({
  selector: 'table-request',
  templateUrl: './table-request.component.html',
  styleUrls: ['./table-request.component.scss']
})
export class TableRequestComponent {

   @Input() category_s: string = ''
   @Input() state_s: string = ''
   @Input() word_s: string = ''

}
