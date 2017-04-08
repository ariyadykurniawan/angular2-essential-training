import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

  onMediaItemDelete(mediaItem) { }

  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
      imgs:[{
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
      imgs:[{
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
      imgs:[{
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
      imgs:[{
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
      imgs:[{
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
