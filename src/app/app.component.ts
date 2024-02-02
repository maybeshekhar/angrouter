import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingdemo';
  sideBarOpen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.sideBarOpen = window.innerWidth > 768;
  }

  sideBarToggler() {
    if (window.innerWidth > 768) {
      return;
    }
    this.sideBarOpen = !this.sideBarOpen;
  }

  ngOnInit() {
    this.checkScreenSize();
  }
}
