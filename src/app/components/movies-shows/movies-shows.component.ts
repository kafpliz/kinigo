import { Component } from '@angular/core';
import Swiper from 'swiper';
import { topFiveFilms } from '../../utils/allUtils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-shows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-shows.component.html',
  styleUrl: './movies-shows.component.scss'
})
export class MoviesShowsComponent {
  bestMovies: { id: number, name: string, shortDescription: string, backdrop: { url: string, previewUrl: string, } }[] = topFiveFilms


  ngAfterViewInit() {
    var swiper = new Swiper(".best_movies-swiper", {
      loop: true,
      keyboard: {
        enabled: true,
       
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  }


}
