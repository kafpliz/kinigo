import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { devicesCard, tarrifPlans } from '../../utils/allUtils';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { getData } from '../../utils/axios';



@Component({
  selector: 'app-main',
  standalone: true,

  imports: [CommonModule, TitleCasePipe,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainComponent {
  genres: { id: number, name: string, genres: { poster: { url: string, previewUrl: string } }[] }[] = [];
  devices: { photo: string, device: string, description: string }[] = devicesCard
  plans: { name: string, description: string, price: { month: { text: string, price: number, }, year: { text: string, price: number } } }[] = tarrifPlans
  planYear: boolean = false;

  constructor() {
    getData('all-genres').then(data => {
      this.genres = data

    })

  }

  ngOnInit() {
  }
  ngAfterViewInit() {
  
  }
  changePlan() {
    if (this.planYear) {
      this.planYear = false
    } else {
      this.planYear = true
    }
  }

}
