import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MoviesComponent } from './components/movies/movies.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'movies', component: MoviesComponent},
    {path: 'support', component: MoviesComponent},
    {path: 'subscriptions', component: MoviesComponent},
];
