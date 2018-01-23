import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParamsListComponent } from './params-list/params-list.component';
import { ParamDetailsComponent } from './param-details/param-details.component';
import { ExperienceBlockComponent } from './experience-block/experience-block.component';
import { LearningBlockComponent } from './learning-block/learning-block.component';
import { EducationBlockComponent } from './education-block/education-block.component';
import { HobbiesBlockComponent } from './hobbies-block/hobbies-block.component';
import { ContactBlockComponent } from './contact-block/contact-block.component';


@NgModule({
  declarations: [
    AppComponent,
    ParamsListComponent,
    ParamDetailsComponent,
    ExperienceBlockComponent,
    LearningBlockComponent,
    EducationBlockComponent,
    HobbiesBlockComponent,
    ContactBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
