import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';

import {PopUpItemComponent} from './popUp-item.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    PopUpItemComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}