import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
onMediaItemDelete(mediaItem){
  console.log(mediaItem);
}

popUp = null;

onMediaItemPreview(mediaItem){
  this.popUp = mediaItem;
}

onPopUpClose(mediaItem){
  this.popUp = null;
}

   firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false,
    picts:["./media/01.png","./media/02.png","./media/03.png","./media/04.png"]
  };
}
