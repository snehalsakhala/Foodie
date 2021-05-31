import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './home/search/search.component';
import { UploadComponent } from './home/upload/upload.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TypesComponent } from './types/types.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UploadComponent,
    AboutComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    TypesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
