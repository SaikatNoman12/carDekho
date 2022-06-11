import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerFixed: any = false;

  constructor() { }

  ngOnInit(): void {
  }


  /* 
  HEADER FIXED CONTROL
  */

  @HostListener("window:scroll") headerFixedControl() {
    if (window.scrollY > 600) {
      this.headerFixed = true;

    }
    else {
      this.headerFixed = false;
    }

    console.log('scrolling');
  }




}
