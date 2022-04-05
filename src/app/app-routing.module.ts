import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationComponent } from './components/destination/destination.component';
import { ExploreComponent } from './components/explore/explore.component';
import { FlyComponent } from './components/fly/fly.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { OfferComponent } from './components/offer/offer.component';
import { SearchComponent } from './components/search/search.component';
import { TopTuorComponent } from './components/top-tuor/top-tuor.component';
import { TravelComponent } from './components/travel/travel.component';
import { TrendComponent } from './components/trend/trend.component';

const routes: Routes = [
  {path:'' , component: NavComponent},
  {path:'', component:HomeComponent},
  {path:'', component:FlyComponent},
  {path:'', component: SearchComponent},
  {path:'',component: DestinationComponent},
  {path:'', component:TopTuorComponent},
  {path:'', component:ExploreComponent},
  {path:'', component:TrendComponent},
  {path:'', component:TravelComponent},
  {path:'', component:OfferComponent},
  {path:'', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
