import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePersistenceService } from '../../../core/service/route-persistence.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  activateLogoutBtn: boolean = false;

  constructor(private routePersistenceService: RoutePersistenceService, private router: Router) { }

  checkLogoutButton(): void {
    if(this.routePersistenceService.getTeacherLoggedIn() === "true" || this.routePersistenceService.getTeacherLoggedIn() === "true") {
      this.activateLogoutBtn = true;
    }
    else {
      this.activateLogoutBtn = false;
    }
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.checkLogoutButton();
    })
  }

  removeLogoutButton(): void {
    this.activateLogoutBtn = false;
  }

  ngOnDestroy(): void {
    this.removeLogoutButton();
  }
  onLogout() {
    this.routePersistenceService.clearRoutes();
    this.removeLogoutButton();
    this.router.navigateByUrl("/");
  }

}
