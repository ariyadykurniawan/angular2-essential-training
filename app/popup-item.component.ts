import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'mw-media-popUp',
  templateUrl: 'app/popup-item.component.html',
  styleUrls: ['app/popup-item.component.css']
})

export class PopUpItemComponent {
  @Input() mediaPopUp;
  @Output() close = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() prev = new EventEmitter();

  isVisible(){
    return this.mediaPopUp ? false:true;
  }

  onPopUpClose(){
    this.close.emit(this.mediaPopUp);
  }
}