import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './index/contact/contact.component';
import { AboutComponent } from './index/about/about.component';
import { HomeComponent } from './index/home/home.component';
import { GalleryComponent } from './index/gallery/gallery.component';
import { MainheaderComponent } from './index/mainheader/mainheader.component';
import { MainFooterComponent } from './index/main-footer/main-footer.component';
import { LoginHomeComponent } from './login/login-home/login-home.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { UserRegisterComponent } from './login/user-register/user-register.component';

const routes=[
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginHomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    GalleryComponent,
    MainheaderComponent,
    MainFooterComponent,
    LoginHomeComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    RouterModule.forRoot(routes,{
      useHash:true,
      anchorScrolling:'enabled'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
