<<<<<<< HEAD
import { Component, Input } from '@angular/core';
=======
import { Component, EventEmitter, Input, Output } from '@angular/core';
>>>>>>> master
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-items.component.html'
})
export class ListItemsComponent {

  @Input() items: Item[] = [];
<<<<<<< HEAD
=======

  @Output() removeEventEmmiter: EventEmitter<number> = new EventEmitter();
  onRemove(id: number){
    this.removeEventEmmiter.emit(id);
  }
>>>>>>> master
}
