<<<<<<< HEAD
import { Component, Input } from '@angular/core';
=======
import { Component, EventEmitter, Input, Output } from '@angular/core';
>>>>>>> master
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html'
})
export class RowItemComponent {

  @Input() item!: Item;
<<<<<<< HEAD
=======

  @Output() removeEventEmmiter: EventEmitter<number> = new EventEmitter();
  onRemove(id: number) {
    this.removeEventEmmiter.emit(id);
  }
>>>>>>> master
}
