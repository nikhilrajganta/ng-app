import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CardComponent } from './card/card.component';
import { Title } from '@angular/platform-browser';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { CounterComponent } from "./counter/counter.component";
import { ColorGameComponent } from "./color-game/color-game.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CardComponent, MoviesListComponent, CounterComponent, ColorGameComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // title = 'Arjun';
  // profileUrl = "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png";

  users = [
    {
      name: 'Candace Hegmann',
      ImgaeUrl:
        'https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/257.jpg',
    },
    {
      name: 'oanne Ryan',
      ImgaeUrl:
        'https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/678.jpg',
    },
    {
      name: 'Christy Daugherty',
      ImgaeUrl:
        'https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/80.jpg',
    },
    {
      name: 'Kellie Schamberger',
      ImgaeUrl:
        'https://ipfs.io/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/311.jpg',
    },
  ];

  //   <!-- <div class="movies">
  //   <app-card
  //     Title="Love Today"
  //     imageURL="https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg"
  //     description="Movie 1"
  //     rating="5.5"
  //   ></app-card>
  //   <app-card
  //     Title="Beast"
  //     imageURL="https://pbs.twimg.com/media/E4bQvR5XwAI3Dzp.jpg"
  //     description="Movie 2"
  //     rating="6.8"
  //   ></app-card>
  //   <app-card
  //     Title="PS1"
  //     imageURL="https://i.redd.it/lq72e1sl4fo91.jpg"
  //     description="Movie 3"
  //     rating="7.3"
  //   ></app-card>
  //   <app-card
  //     Title="Sardar"
  //     imageURL="https://pbs.twimg.com/media/FbkXGJMXoAAcye0.jpg"
  //     description="Movie 4"
  //     rating="9.9"
  //   ></app-card>
  // </div> -->

  // movies = [
  //   {
  //     title: 'Love Today',
  //     imageURL:
  //       'https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg',
  //     description: 'Movie 1',
  //     rating: '5.5',
  //   },
  //   {
  //     title: 'Love Today',
  //     imageURL:
  //       'https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg',
  //     description: 'Movie 1',
  //     rating: '5.5',
  //   },
  //   {
  //     title: 'Love Today',
  //     imageURL:
  //       'https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg',
  //     description: 'Movie 1',
  //     rating: '5.5',
  //   },
  //   {
  //     title: 'Love Today',
  //     imageURL:
  //       'https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg',
  //     description: 'Movie 1',
  //     rating: '5.5',
  //   },
  //   {
  //     title: 'Love Today',
  //     imageURL:
  //       'https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg',
  //     description: 'Movie 1',
  //     rating: '5.5',
  //   },
  // ];


}
