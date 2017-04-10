import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html'
})
export class MediaItemComponent {
  @Input() mediaItem;
  @Output() delete = new EventEmitter();
  @Output() preview = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItem);
  }

   onPreview(){
      this.preview.emit(this.mediaItem);
    }
}
