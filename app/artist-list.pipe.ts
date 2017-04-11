import { Pipe } from '@angular/core';

@Pipe({
  name: 'artistList'
})
export class ArtistListPipe {
  transform(mediaItems) {
    var artists = [];
    mediaItems.forEach(mediaItem => {
      if (artists.indexOf(mediaItem.artist) <= -1) {
        artists.push(mediaItem.artist);
      }
    });
    return artists.join(', ');
  }
}