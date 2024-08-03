import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesShowsComponent } from './components/movies-shows/movies-shows.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'movies&shows', component: MoviesShowsComponent},
    {path: 'support', component: MoviesShowsComponent},
    {path: 'subscriptions', component: MoviesShowsComponent},
    {path: 'movie/:id', component: MovieComponent},
];
