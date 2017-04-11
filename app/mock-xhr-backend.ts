import { Request, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class MockXHRBackend {
  constructor() {
  }

  createConnection(request: Request) {
    var response = new Observable((responseObserver: Observer<Response>) => {
      var responseData;
      var responseOptions;
      switch (request.method) {
        case RequestMethod.Get:
         console.log(request.url);
          if (request.url.indexOf('mediaitems?medium=') >= 0 || request.url === 'mediaitems') {
            var medium;
            if (request.url.indexOf('?') >= 0) {
              medium = request.url.split('=')[1];
              if (medium === 'undefined') medium = '';
            }

            var mediaItems;
            if (medium) {
              if(medium === "newrelease"){
                console.log(medium);
                mediaItems = this._mediaItems.filter(mediaItem => mediaItem.newRelease === true);
              }
              else{
                mediaItems = this._mediaItems.filter(mediaItem => mediaItem.medium === medium);
              }
              
            }else {
              mediaItems = this._mediaItems;
            }

            responseOptions = new ResponseOptions({
              body: { mediaItems: JSON.parse(JSON.stringify(mediaItems)) },
              status: 200
            });
          } else {
            var id = parseInt(request.url.split('/')[1]);
            mediaItems = this._mediaItems.filter(mediaItem => mediaItem.id === id);
            responseOptions = new ResponseOptions({
              body: JSON.parse(JSON.stringify(mediaItems[0])),
              status: 200
            });
          }
          break;
        case RequestMethod.Post:
          var mediaItem = JSON.parse(request.text().toString());
          mediaItem.id = this._getNewId();
          this._mediaItems.push(mediaItem);
          responseOptions = new ResponseOptions({ status: 201 });
          break;
        case RequestMethod.Delete:
          var id = parseInt(request.url.split('/')[1]);
          this._deleteMediaItem(id);
          responseOptions = new ResponseOptions({ status: 200 });
      }

      var responseObject = new Response(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => { };
    });
    return { response };
  }

  _deleteMediaItem(id) {
    var mediaItem = this._mediaItems.find(mediaItem => mediaItem.id === id);
    var index = this._mediaItems.indexOf(mediaItem);
    if (index >= 0) {
      this._mediaItems.splice(index, 1);
    }
  }

  _getNewId() {
    if (this._mediaItems.length > 0) {
      return Math.max.apply(Math, this._mediaItems.map(mediaItem => mediaItem.id)) + 1;
    }
  }

  _mediaItems = [
    {
      id: 1,
      title: "Kali Kedua",
      artist: "Raisa",
      album: "Handmade",
      medium: "Pop",
      timeRelease:"2016-02-05",
      newRelease:false,
      lyrics: `Jika wangimu saja bisa
                Memindahkan duniaku
                Maka cintamu pasti bisa
                Mengubah jalan hidupku
                Cukup sekali saja
                Aku pernah merasa
                Betapa menyiksa kehilanganmu
                Kau tak terganti
                Kau yang slalu kunanti
                Takkan kulepas lagi
                Pegang tanganku
                Bersama jatuh cinta
                Kali kedua pada yang sama
                Jika senyummu saja bisa
                Mencuri detak jantungku
                Maka pelukkan mu yang bisa
                Menyapu seluruh hatiku
                Cukup sekali saja
                Aku pernah merasa
                Betapa menyiksa kehilanganmu
                Kau tak terganti
                Kau yang slalu kunanti
                Takkan kulepas lagi
                Pegang tanganku
                Bersama jatuh cinta
                Kali kedua pada yang sama
                (Satukan hati, tanpa peduli)
                Kedua kali kita bersama lagi
                Pegang tanganku
                Bersama jatuh cinta
                Kali kedua pada yang sama
                Sama indahnya
                Pegang tanganku
                Bersama jatuh cinta
                Kali kedua pada yang sama
                Sama indahnya`
    },
    {
      id: 2,
      title: "Don't Let Me Down",
      artist: "The Chainsmokers",
      album: "Shape of You",
      medium: "Rock",
      timeRelease: "2016-10-05",
      newRelease:true,
      lyrics: ``
    }
  ];
}