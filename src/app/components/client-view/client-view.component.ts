import { Component, Input, input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html'
})
export class ClientViewComponent {

  @Input() client: Client = new Client();

}
