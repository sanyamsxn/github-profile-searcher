import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// components
import { UsercardComponent } from './components/usercard/usercard.component';
import { ReposComponent } from './components/repos/repos.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

//form
import {FormsModule} from '@angular/forms';

//http client configuration
import {HttpClientModule} from '@angular/common/http'

//services configuration
import {AuthService} from './services/auth.service'
import {GithubService} from './services/github.service'

//toastr service configuration
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//firebase
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import {AngularFireModule} from '@angular/fire/compat'

//environment configuration
import {environment} from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    UsercardComponent,
    ReposComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
