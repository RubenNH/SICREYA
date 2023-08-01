import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnDestroy{

  routerEvents: any;
  showNav: boolean = true;

  constructor(private router: Router) {
    this.routerEvents = this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/') {
            if (localStorage.getItem('token')) {
              router.navigate(['/'])
            } else {
              this.showNav = false;
            }
          } else {
            if (localStorage.getItem('token')) {
              this.showNav = true;
            } else {
              router.navigate(['/login']);
            }
          }
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.routerEvents.unsuscribe();
  }

}
