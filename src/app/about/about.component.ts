import { Component, OnInit } from '@angular/core';
import {faDownload, faUsers} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  collapsed = true;
  faDownload = faDownload;
  faUsers = faUsers;
  constructor() { }

  ngOnInit(): void {
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

}
