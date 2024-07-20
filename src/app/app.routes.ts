import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesShowsComponent } from './components/movies-shows/movies-shows.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'movies&shows', component: MoviesShowsComponent},
    {path: 'support', component: MoviesComponent},
    {path: 'subscriptions', component: MoviesComponent},
];
