import { Route } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RaceComponent } from './race/race.component';

export const routes: Route[] = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'race/:year/:name',
    component: RaceComponent
  },
  {
    path: 'race',
    component: RaceComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
