import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainheaderComponent } from './mainheader/mainheader.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, GalleryComponent, ContactComponent, MainFooterComponent, MainheaderComponent],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
