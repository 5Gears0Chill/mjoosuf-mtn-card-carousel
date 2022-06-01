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
      cardHeading: 'Home internet',
      actionButtonText: 'START HERE >',
      actionButtonHref: '#',
    },
    {
      cardHeading: 'Get a device',
      actionButtonText: 'START HERE >',
      actionButtonHref: '#',
    },
    {
      cardHeading: 'Add a phone-line',
      actionButtonText: 'START HERE >',
      actionButtonHref: '#',
    },
    {
      cardHeading: 'Upgrade',
      actionButtonText: 'START HERE >',
      actionButtonHref: '#',
    }
  ]
}
