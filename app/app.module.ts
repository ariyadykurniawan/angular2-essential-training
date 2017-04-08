import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';

import {PopUpItemComponent} from './popUp-item.component';
import {ImgItemComponent} from './img-item.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    PopUpItemComponent,
    ImgItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}