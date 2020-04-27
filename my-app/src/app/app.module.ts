import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './users/navbar/navbar.component';
import { SidemenuComponent } from './users/sidemenu/sidemenu.component';
import { SliderComponent } from './users/slider/slider.component';
import { CategoryComponent } from './users/category/category.component';
import { OnsaleComponent } from './users/onsale/onsale.component';
import { NewproductsComponent } from './users/newproducts/newproducts.component';
import { FeaturesComponent } from './users/features/features.component';
import { FooterComponent } from './users/footer/footer.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidemenuComponent,
    SliderComponent,
    CategoryComponent,
    OnsaleComponent,
    NewproductsComponent,
    FeaturesComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
