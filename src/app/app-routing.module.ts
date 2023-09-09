import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header-component/header/header.component';
import { AboutComponent } from './components/about-component/about/about.component';
import { ProjectsComponent } from './components/projects-component/projects/projects.component';
import { ContactMeComponent } from './components/contact-me-component/contact-me/contact-me.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact-me', component: ContactMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
