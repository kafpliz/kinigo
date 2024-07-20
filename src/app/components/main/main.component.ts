import { Component } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import { devicesCard, genres, tarrifPlans } from '../../utils/allUtils';
import { CommonModule, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, TitleCasePipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  genres:{ name: string; slug: string; }[] = genres;
  devices:{photo:string, device:string, description:string}[] = devicesCard
  plans: {name: string, description: string, price: {month: {text: string, price: number,},year: {text: string,price: number}}}[] = tarrifPlans
  planYear:boolean = false;

  constructor(){
  
  
  }
  ngOnInit() {
  
  }
  ngAfterViewInit() {
    let swiper:any = new Swiper(".genres-catalog", {
      slidesPerView: 5,
      spaceBetween: 30,
    });
  }
  changePlan(){
    if(this.planYear){
      this.planYear = false
    } else {
      this.planYear = true
    }
  }

}
