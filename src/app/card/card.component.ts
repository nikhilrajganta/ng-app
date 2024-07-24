import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() Title = ''
  @Input() imageURL = ""
  @Input() description = ""
  @Input() rating = ""
}