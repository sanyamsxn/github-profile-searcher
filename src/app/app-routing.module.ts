import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// all components
import {PagenotfoundComponent} from "./pages/pagenotfound/pagenotfound.component"
import {SigninComponent} from "./pages/signin/signin.component"
import {SignupComponent} from "../app/pages/signup/signup.component"
import {HomeComponent} from "../app/pages/home/home.component"
import {AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo} from "@angular/fire/compat/auth-guard"

const redirectUnauthorizedToSignin = () => redirectUnauthorizedTo(['signin'])
const redirectLoggedInToHome = () => redirectLoggedInTo([''])


 const routes:Routes= [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe:redirectLoggedInToHome },
  },
  
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe:redirectUnauthorizedToSignin },
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
