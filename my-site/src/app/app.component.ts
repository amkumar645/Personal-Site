import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faArrowCircleDown,faFileDownload} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  collapsed = true;
  collapsed2 = true;
  faGithub = faGithub;
  faLinkedIn = faLinkedin;
  faMail = faEnvelope;
  faArrow = faArrowCircleDown;
  faDownload = faFileDownload;
  scrollTop = 0;
  visible = true;

  // @HostListener('window:scroll') onScroll(e: Event): void {
  //   this.visible = false;
  //   setTimeout('', 1000);
  // }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  toggleCollapsed2(): void {
    this.collapsed2 = !this.collapsed2;
    console.log(window.location.href);
  }


}
