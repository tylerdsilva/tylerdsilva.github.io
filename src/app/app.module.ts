import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';


import {UiService} from './services/ui/ui.service';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/aboutme/aboutme.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ExperiencesComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule
  ],
  providers: [
    UiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
