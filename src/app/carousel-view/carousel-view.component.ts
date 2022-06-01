import { Component, OnInit, Input } from '@angular/core';
import { CarouselCardItem } from '../interfaces/carousel-card-item.interface';

@Component({
  selector: 'app-carousel-view',
  templateUrl: './carousel-view.component.html',
  styleUrls: ['./carousel-view.component.css']
})
export class CarouselViewComponent implements OnInit {
  @Input()
  item : CarouselCardItem = {
    cardHeading: 'Get a Device',
    actionButtonText: 'Start Here >',
    actionButtonHref: '#',
  };

  cards: CarouselCardItem[] = [];
  
  constructor() { 
    this.cards.push(this.item);
    this.cards.push(this.item);
    this.cards.push(this.item);
    this.cards.push(this.item);
    this.cards.push(this.item);
  }

  ngOnInit(): void {
  }

}
