import { Routes } from '@angular/router';

import { WebsiteMainLayout } from './Website/website-main-layout/website-main-layout';
import { WebsiteHome } from './Website/website-home/website-home';
import { AboutComponent } from './Website/about/about';

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
import { ProductLaunchShoot } from './Website/services/product-launch-shoot/product-launch-shoot';
import { BusinessMeetupShoot } from './Website/services/business-meetup-shoot/business-meetup-shoot';
import { AdminLogin } from './Admin/admin-login/admin-login';
import { Dashboard } from './Admin/dashboard/dashboard';
import { DashboardContent } from './Admin/dashboard/dashboard-content/dashboard-content';
import { TraditionalContent } from './Admin/traditional-content/traditional-content';
import { CandidContent } from './Admin/candid-content/candid-content';
import { RegularShootContent } from './Admin/regular-shoot-content/regular-shoot-content';
import { CinematicContent } from './Admin/cinematic-content/cinematic-content';
import { ProductLaunchContent } from './Admin/product-launch-content/product-launch-content';
import { BusinessMeetupContent } from './Admin/business-meetup-content/business-meetup-content';
import { NewbornContent } from './Admin/newborn-content/newborn-content';
import { BirthdayContent } from './Admin/birthday-content/birthday-content';
import { Home } from './Admin/home/home';
import { ContactDetails } from './Admin/contact-details/contact-details';
import { Quotation } from './Admin/quotation/quotation';
import { ContactComponent } from './Website/contact/contact';

export const routes: Routes = [

  //  {
  //   path: '',
  //   component: WebsiteMainLayout,
  //   children: [
  //       { path: '', component: AboutComponent },
  //     { path: 'website-home', component: WebsiteHome },
  //     { path: 'about', component: AboutComponent },
  //     { path: 'contact', component: Contact },
  //     { path: 'gallery', component: Gallery },
  //     { path: 'service', component: Services },
  //     { path: 'portfolio', component: Portfolio },
  //     { path: 'traditonal-wedding', component: TraditionalWedding },
  //     { path: 'candid-wedding', component: CandidWedding },
  //     { path: 'destination-weddinng', component: DestinationWedding },
  //     { path: 'indoor-shoot', component: IndoorShooting },
  //     { path: 'outdoor-shoot', component: OutdoorShooting },
  //     { path: 'cinematic-shoot', component: CinematicShooting },
  //     { path: 'newborn-shoot', component: NewbornShoot },
  //     { path: 'bithday-shoot', component: KidBirthdayShoot },
  //     { path: 'kid-outdoor-shoot', component: KidOutdoorShoot },
  //     { path: 'product-launch-shoot', component: ProductLaunchShoot },
  //     { path: 'business-meetup-shoot', component: BusinessMeetupShoot },
  //   ],
  // },
  { path: 'admin', component: AdminLogin },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', component: DashboardContent },
      { path: 'traditional', component: TraditionalContent },
      { path: 'candid', component: CandidContent },
      { path: 'regular', component: RegularShootContent },
      { path: 'cinematic', component: CinematicContent },
      { path: 'product', component: ProductLaunchContent },
      { path: 'business', component: BusinessMeetupContent },
      { path: 'newborn', component: NewbornContent },
      { path: 'birthday', component: BirthdayContent },
      {path:'home',component:Home},
       {path:'contact',component:ContactDetails},
       {path:'quotation',component:Quotation}
    ],
  },

  {
    path: '',
    component: WebsiteMainLayout,
    children: [
      { path: '', component: WebsiteHome },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component:ContactComponent },
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
      { path: 'product-launch-shoot', component: ProductLaunchShoot },
      { path: 'business-meetup-shoot', component: BusinessMeetupShoot },
    ],
  },

  { path: '**', redirectTo: '' },
];
