import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper-component/wrapper/wrapper.component';
import { NavBarComponent } from './components/navigation-component/nav-bar/nav-bar.component';
import { SideMenuComponent } from './components/mobile-side-menu/side-menu/side-menu.component';
import { AboutComponent } from './components/about-component/about/about.component';
import { ProjectsComponent } from './components/projects-component/projects/projects.component';
import { HeaderComponent } from './components/header-component/header/header.component';
import { ContactMeComponent } from './components/contact-me-component/contact-me/contact-me.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    NavBarComponent,
    SideMenuComponent,
    AboutComponent,
    ProjectsComponent,
    HeaderComponent,
    ContactMeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
