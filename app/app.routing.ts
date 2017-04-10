import { Routes, RouterModule } from '@angular/router';

import { SongItemFormComponent } from './song-item-form.component';
import { SongItemListComponent } from './song-item-list.component';

const appRoutes: Routes = [
  { path: 'add', component: SongItemFormComponent },
  { path: ':medium', component: SongItemListComponent },
  { path: ':newRelease', component: SongItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const routing = RouterModule.forRoot(appRoutes);
