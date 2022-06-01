import { Component } from '@angular/core';
import { CarouselCardItem } from 'projects/mtn-carousel/src/lib/interfaces/carousel-card-item.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardCarousel';
  isDarkModeEnabled: boolean = false;
  items: CarouselCardItem[] = [
    {
      cardHeading: 'Card 1',
      actionButtonText: 'START HERE >',
      actionButtonHref: '#',
    },
    {
      cardHeading: 'Card 2',
      actionButtonText: 'START HERE >',
      actionButtonHref: '#',
    },
    {
      cardHeading: 'Card 3',
      actionButtonText: 'START HERE >',
      actionButtonHref: '#',
    },
    {
      cardHeading: 'Card 4',
      actionButtonText: 'START HERE >',
      actionButtonHref: '#',
    },
    {
      cardHeading: 'Card 5',
      actionButtonText: 'START HERE >',
      actionButtonHref: '#',
    },
  ]
}
