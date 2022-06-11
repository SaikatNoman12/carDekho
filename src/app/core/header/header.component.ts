import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerFixed = false;

  constructor() { }

  ngOnInit(): void {
    window.scrollBy(0,0);
  }


  /* 
  HEADER FIXED CONTROL
  */

  @HostListener('window:scroll') 
  headerFixedMethod(){
    if(window.scrollY > 300){
      this.headerFixed = false;
    }else{
      this.headerFixed = false;
    }
    console.log('scrolling');

  }




}
