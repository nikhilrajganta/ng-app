import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { CardComponent } from './card/card.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { CounterComponent } from './counter/counter.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFOundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const routes: Routes = [
    {
        path: '',
        component : HomeComponent,
    },
    {
        path : 'color-game',
        component: ColorGameComponent,
    },
    {
        path : 'counter-game',
        component: CounterComponent,
    },
    {
        path : 'movie-list',
        component: MoviesListComponent,
    },
    {
        path : 'movie-list/:id',
        component: MovieDetailsComponent,
    },
    {
        path : '**',
        component: PageNotFOundComponent,
    },
    {
        path : 'flims',
        redirectTo: 'movie-list',
        pathMatch: 'full',
    },
];
