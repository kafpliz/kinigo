import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import Swiper from 'swiper';
import { getData } from '../../utils/axios';
import { Movie } from '../../interfaces/allInterface';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieComponent {
  movie:Movie | null = null;

  constructor(private route: ActivatedRoute,) {
    route.params.subscribe(params => {
      console.log(params['id']);
      getData('movie?id='+params['id']).then((data:any) => {
       this.movie = data.movie
        console.log(data);
        
      })
    })
  }
  ngOnInit(){
    
    
  }
 

  ngAfterViewInit() {
    let swiper = new Swiper(".actors_slide", {
      slidesPerView: 7,
      spaceBetween: 30,
    });
  }
}
