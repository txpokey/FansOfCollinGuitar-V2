import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesModule } from '../services/services.module';
import { CarouselComponent } from './carousel/carousel.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, CarouselComponent, NavbarComponent],
  exports: [HeaderComponent, FooterComponent, CarouselComponent, NavbarComponent]
})
export class LayoutModule { }
