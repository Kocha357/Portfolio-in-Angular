import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  desktopNavItems: string[] = ['home', 'about', 'projects'];
  isSelected$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(
    readonly sharedService: SharedService,
    public router: Router,
    public location: Location
  ) {}
  ngOnInit(): void {
    if (this.sharedService.isDesktop$.value) {
      this.navigateTo('/home');
    }
  }
  openSideMenu(): void {
    this.sharedService.openSideMenu$.next(true);
  }
  navigateTo(input: string) {
    if (input === '/home') {
      this.router.navigate(['/header']);
    } else {
      this.router.navigate([input]);
    }
    this.isSelected$.next(input);
  }
}
