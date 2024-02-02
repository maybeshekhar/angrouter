import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CareersComponent } from './careers/careers.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
