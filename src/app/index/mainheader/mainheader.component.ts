import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toHome(){
    document.getElementById("carousel-header").scrollIntoView({behavior:"smooth"});
  }
  toAbout(){
    document.getElementById("about").scrollIntoView({behavior:"smooth"});
  }
  toGallery(){
    document.getElementById("gallery").scrollIntoView({behavior:"smooth"});
  }
  toContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }
}
