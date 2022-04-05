import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FlyComponent } from './components/fly/fly.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { DestinationComponent } from './components/destination/destination.component';
import { TopTuorComponent } from './components/top-tuor/top-tuor.component';
import { ExploreComponent } from './components/explore/explore.component';
import { TrendComponent } from './components/trend/trend.component';
import { TravelComponent } from './components/travel/travel.component';
import { OfferComponent } from './components/offer/offer.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlyComponent,
    NavComponent,
    SearchComponent,
    DestinationComponent,
    TopTuorComponent,
    ExploreComponent,
    TrendComponent,
    TravelComponent,
    OfferComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
