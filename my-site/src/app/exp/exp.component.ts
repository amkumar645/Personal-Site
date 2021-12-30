import { Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;
  medium = false;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth <= 768 || this.getScreenHeight <= 500)
      this.medium = true;
    else
      this.medium = false;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth <= 768 || this.getScreenHeight <= 500)
      this.medium = true;
    else
      this.medium = false;
  }

}
