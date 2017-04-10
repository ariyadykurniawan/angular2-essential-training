import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { MediaItemService } from './media-item.service';
import { lookupListToken } from './providers';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: 'app/song-item-form.component.html'
})
export class SongItemFormComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject(lookupListToken) public lookupLists,
    private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Pop'),
      artist: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      title: this.formBuilder.control('', Validators.required),
      album: this.formBuilder.control('', Validators.required),
      lyrics: this.formBuilder.control('', Validators.required),
      timeRelease: this.formBuilder.control('', Validators.required),
      newRelease: this.formBuilder.control('', Validators.required),
    });
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem)
      .subscribe(() => {
        this.router.navigate(['/all']);
      });
  }
}
