import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { CarouselViewComponent } from './carousel-view/carousel-view.component';


@NgModule({
  declarations: [
    CarouselCardComponent,
    CarouselViewComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CarouselViewComponent,
  ]
})
export class MtnCarouselModule { }
