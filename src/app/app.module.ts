import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CourseRegisterComponent } from './course-register-page.component';

@NgModule({
  declarations: [
    CourseRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [CourseRegisterComponent]
})
export class AppModule { }
