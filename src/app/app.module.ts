import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationExperienceComponent } from './education-experience/education-experience.component';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    WorkExperienceComponent,
    EducationExperienceComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'about', component: AboutComponent},
      {path: '', component: AboutComponent},
      {path: 'work-experience', component: WorkExperienceComponent},
      {path: 'education-experience', component: EducationExperienceComponent},
      {path: 'github', component: GithubComponent},
      {path: 'contact', component: ContactComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
