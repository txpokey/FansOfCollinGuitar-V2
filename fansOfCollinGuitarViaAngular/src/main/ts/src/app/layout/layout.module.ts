import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesModule } from '../services/services.module';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, CarouselComponent],
  exports: [HeaderComponent, FooterComponent, CarouselComponent]
})
export class LayoutModule { }
