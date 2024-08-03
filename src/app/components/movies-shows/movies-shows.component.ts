import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MustWathes, TrendingMovieNow, genres, topFiveFilms } from '../../utils/allUtils';
import { CommonModule } from '@angular/common';
import { MinutesToHoursPipe } from '../../pipes/minutes-to-hours.pipe';
import { HundredthousandPipe } from '../../pipes/hundredthousand.pipe';
import { StarRatingComponent } from '../ui/star-rating/star-rating.component';
import { getData } from '../../utils/axios';

@Component({
  selector: 'app-movies-shows',
  standalone: true,
  imports: [CommonModule, MinutesToHoursPipe, HundredthousandPipe, StarRatingComponent],
  templateUrl: './movies-shows.component.html',
  styleUrl: './movies-shows.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MoviesShowsComponent {
  bestMovies: { id: number, name: string, shortDescription: string, backdrop: { url: string, previewUrl: string, } }[] = topFiveFilms
  allGenres: { id: number, name: string, genres: { poster: { url: string, previewUrl: string } }[] }[] = []
  trendingMovie: { votes: { kp: number; imdb: number; filmCritics: number; russianFilmCritics: number; await: number; }; poster: { url: string; previewUrl: string; }; movieLength: number; }[] = TrendingMovieNow
  mustwathes: { movieLength: number; poster: { url: string; previewUrl: string; }; rating: { kp: number; imdb: number; filmCritics: number; russianFilmCritics: number; await: null; }; votes: { kp: number; imdb: number; filmCritics: number; russianFilmCritics: number; await: number; }; }[] = MustWathes

  constructor() {
    getData('all-genres').then(data => {
      this.allGenres = data

    })
  }

  ngAfterViewInit() {
  /*   let swiper1 = new Swiper(".best_movies-swiper", {
      loop: true,
      keyboard: {
        enabled: true,

      },

    });

    let swiper2: any = new Swiper(".movies-shows_chapter-swiper-1", {
      slidesPerView: 5,
      spaceBetween: 30,
    });
    let swiper3: any = new Swiper(".movies-shows_chapter-swiper-2", {
      slidesPerView: 4,
      spaceBetween: 30,
    });
    let swiper4: any = new Swiper(".movies-shows_chapter-swiper-3", {
      slidesPerView: 4,
      spaceBetween: 20,
    }); */
  }


}
