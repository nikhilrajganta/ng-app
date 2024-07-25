import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from '../counter/counter.component';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule,CounterComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  value = true;
  

  @Input() movies ={
    "name": "Vikram",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    "rating": "8.4",
    "summary": "Members of a black ops team must track and eliminate a gang of masked murderers."
  }

  hidesummary() {
    this.value = !this.value;
  }

  i = 0;
  @Output() deleteItemEvent = new EventEmitter<number>();

  deletefunc(){
    this.deleteItemEvent.emit();
  }
}
