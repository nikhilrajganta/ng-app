import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MoviesService } from '../movies.service';


type movies = {
  id : number;
  name: string;
  rating: number;
  summary: string;
  poster: string;
  trailer : string;
};

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss'
})
export class MoviesListComponent {
  movieList: Array<movies> = []; // Model -> View
  isLoading: boolean = true;
  msg = '';

  constructor(public movieService : MoviesService){}

  ngOnInit() {
    this.movieService
      .getAllMoviesP()
      .then((data) => {
        this.movieList = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
    }

deleteMovie(movie:movies) {
  // const index = this.movieService.moviesData.indexOf(movie);
  // if (index !== -1) {
  //   this.movieService.moviesData.splice(index, 1);
  // }
  this.movieService.deletefun(movie).then(()=>{
    this.movieService
      .getAllMoviesP()
      .then((data) => {
        this.movieList = data;
        this.isLoading = false;
      })
  })
}
}