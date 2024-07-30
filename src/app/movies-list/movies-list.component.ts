import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MoviesService } from '../movies.service';


type movies = {
  id : number;
  name: string;
  rating: number;
  summary: string;
  poster: string;
};

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {

  constructor(public movieService : MoviesService){}


deleteMovie(movie:movies ) {
  const index = this.movieService.moviesData.indexOf(movie);
  if (index !== -1) {
    this.movieService.moviesData.splice(index, 1);
  }
}
}

