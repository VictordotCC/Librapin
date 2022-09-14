import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';

import { BusquedaPageRoutingModule } from './busqueda-routing.module';

import { BusquedaPage } from './busqueda.page';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaPageRoutingModule
  ],
  declarations: [BusquedaPage]
})
export class BusquedaPageModule {}
