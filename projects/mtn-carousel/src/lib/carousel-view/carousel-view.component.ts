import { Component, OnInit, Input } from '@angular/core';
import { CarouselCardItem } from '../interfaces/carousel-card-item.interface';

@Component({
  selector: 'app-carousel-view',
  templateUrl: './carousel-view.component.html',
  styleUrls: ['./carousel-view.component.css']
})
export class CarouselViewComponent implements OnInit {
  @Input()
  items: CarouselCardItem[] = [];
  @Input()
  isDarkModeEnabled: boolean = false;

  cards: CarouselCardItem[] = [];
  selected?: number;
  selectedCard?: CarouselCardItem;
  view: 'desktop' | 'tablet' = 'desktop';

  private mediaQuery: MediaQueryList;
  private totalDesktop = 5;
  private totalTablet = 3;

  constructor() {
    this.mediaQuery = window.matchMedia('(max-width: 991px)');
    this.onWindowResized();
    this.mediaQuery.addEventListener('change', this.onWindowResized);
  }

  ngOnInit(): void {
    this.activateSelectedCard(1);
  }

  onWindowResized = () => {
    this.view = this.mediaQuery.matches ? 'tablet' : 'desktop';
    this.activateSelectedCard(this.selected || 0);
  }

  back() {
    this.activateSelectedCard((this.selected || 0) - 1);
  }

  next() {
    this.activateSelectedCard((this.selected || 0) + 1);
  }

  activateSelectedCard(i: number) {
    // define the selected index and selected card
    this.selected = (this.items.length + i) % this.items.length;
    this.selectedCard = this.items[this.selected];

    //from the list define where is the middle point and select x in either direction
    const middleIndex = Math.floor(this.getNumberOfCards() / 2); //eg if total cards to display is 5 then the middle point if Math.floor(5/2) = 2
    //put all the items into the list
    const beginningIndex = (this.selected + this.items.length - middleIndex) % this.items.length;
      this.cards = [];//empty list before adding
    for (let i = 0; i < this.getNumberOfCards(); i++) {
      this.cards.push(this.items[(i + beginningIndex) % this.items.length]);
    }

  }

  private getNumberOfCards() {
    return this.view === 'desktop' ? this.totalDesktop : this.totalTablet;
  }
}
