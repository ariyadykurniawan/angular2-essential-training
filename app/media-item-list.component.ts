import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

  onMediaItemDelete(mediaItem) { }

  popUp = null;

  onMediaItemPreview(mediaItem){
    this.popUp = mediaItem;
  }

  onPopUpClose(mediaItem){
    this.popUp = null;
  }

  idx=0;

  reset(media1,idx){
    for(var img of media1.picts){
        img.selected = false;
    }
    media1.picts[idx].selected = true;

  }

  nextImage(media){
    this.idx +=1;
    if(this.idx >  media.picts.lengt){
      this.idx = 0;
    }
    this.reset(media,this.idx);
  }

  prevImage(media){
    this.idx -=1;
    if(this.idx < 0){
      this.idx = 1;
    }
    this.reset(media,this.idx);
  }

  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
      picts:[{
          src:'./media/01.png',
          selected: true
        },
        {
          src:'./media/02.png',
          selected: false
        }]
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true,
      picts:[{
          src:'./media/01.png',
          selected: true
        },
        {
          src:'./media/02.png',
          selected: false
        }]
    }, {
      id: 3,
      name: "The Redemption",
      medium: "Movies",
      category: "Action",
      year: 2016,
      watchedOn: null,
      isFavorite: false,
      picts:[{
          src:'./media/01.png',
          selected: true
        },
        {
          src:'./media/02.png',
          selected: false
        }]
    }, {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true,
      picts:[{
          src:'./media/01.png',
          selected: true
        },
        {
          src:'./media/02.png',
          selected: false
        }]
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false,
      picts:[{
          src:'./media/01.png',
          selected: true
        },
        {
          src:'./media/02.png',
          selected: false
        }]
    }
  ];
}
