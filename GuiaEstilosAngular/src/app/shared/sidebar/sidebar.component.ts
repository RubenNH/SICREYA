import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnDestroy{

  routerEvents: any;
  showNav: boolean = true;

  constructor(private router: Router) {
    this.routerEvents = this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/login') {
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
