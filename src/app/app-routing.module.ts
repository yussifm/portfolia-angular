import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './comp/about/about.component';
import { HomeComponent } from './comp/home/home.component';
import { ProjectComponent } from './comp/project/project.component';
import { ContactComponent } from './comp/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'project', component: ProjectComponent,
  },
  {
    path: 'about', component: AboutComponent,
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
