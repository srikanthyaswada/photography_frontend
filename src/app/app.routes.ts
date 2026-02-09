import { Routes } from '@angular/router';

import { WebsiteMainLayout } from './Website/website-main-layout/website-main-layout';
import { WebsiteHome } from './Website/website-home/website-home';
import { AboutComponent } from './Website/about/about';
import { Contact } from './Website/contact/contact';
import { Gallery } from './Website/gallery/gallery';
import { Services } from './Website/services/services';
import { Portfolio } from './Website/portfolio/portfolio';
import { TraditionalWedding } from './Website/services/traditional-wedding/traditional-wedding';
import { CandidWedding } from './Website/services/candid-wedding/candid-wedding';
import { DestinationWedding } from './Website/services/destination-wedding/destination-wedding';
import { IndoorShooting } from './Website/services/indoor-shooting/indoor-shooting';
import { OutdoorShooting } from './Website/services/outdoor-shooting/outdoor-shooting';
import { CinematicShooting } from './Website/services/cinematic-shooting/cinematic-shooting';
import { NewbornShoot } from './Website/services/newborn-shoot/newborn-shoot';
import { KidBirthdayShoot } from './Website/services/kid-birthday-shoot/kid-birthday-shoot';
import { KidOutdoorShoot } from './Website/services/kid-outdoor-shoot/kid-outdoor-shoot';

export const routes: Routes = [
  {
    path: '',
    component: WebsiteMainLayout,
    children: [
      { path: '', component: WebsiteHome },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: Contact },
      { path: 'gallery', component: Gallery },
      { path: 'service', component: Services },
      { path: 'portfolio', component: Portfolio },
      { path: 'traditonal-wedding', component: TraditionalWedding },
      { path: 'candid-wedding', component: CandidWedding },
      { path: 'destination-weddinng', component: DestinationWedding },
      { path: 'indoor-shoot', component: IndoorShooting },
      { path: 'outdoor-shoot', component: OutdoorShooting },
      { path: 'cinematic-shoot', component: CinematicShooting },
      { path: 'newborn-shoot', component: NewbornShoot },
      { path: 'bithday-shoot', component: KidBirthdayShoot },
      { path: 'kid-outdoor-shoot', component: KidOutdoorShoot },
    ],
  },
];
