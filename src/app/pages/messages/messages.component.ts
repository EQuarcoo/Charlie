import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CardComponent } from '../../shared/component/card/card.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {

}
