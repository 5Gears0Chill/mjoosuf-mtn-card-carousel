import { Component, OnInit , Input} from '@angular/core';
import { CarouselCardItem } from '../interfaces/carousel-card-item.interface';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  @Input()
  item?: CarouselCardItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
