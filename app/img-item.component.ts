import { Component,Input, Output } from '@angular/core';

@Component({
  selector: 'mw-media-img',
  templateUrl: 'app/img-item.component.html'
  //styleUrls: ['app/img-item.component.css']
})
export class ImgItemComponent {
  @Input() imgs;

}
