import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from '../counter/counter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

type movies = {
  id : number;
  name: string;
  rating: number;
  summary: string;
  poster: string;
};


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule,CounterComponent,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  value = true;
  
  @Input() movies : any = {
    "id" : '',
    "name": "Vikram",
    "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
    "rating": 8.4,
    "summary": "Members of a black ops team must track and eliminate a gang of masked murderers."
  }

  hidesummary() {
    this.value = !this.value;
  }

  @Output() deleteItemEvent = new EventEmitter<movies>();

  deletefunc(){
    this.deleteItemEvent.emit(this.movies);
  }
}
