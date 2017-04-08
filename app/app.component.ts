import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  popUp = null;

  onMediaItemPreview(mediaItem){
    this.popUp = mediaItem;
  }

  onPopUpClose(mediaItem){
    this.popUp = null;
  }

}
