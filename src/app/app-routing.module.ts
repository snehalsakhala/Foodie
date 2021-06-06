import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TypesComponent } from './types/types.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'types', component: TypesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
