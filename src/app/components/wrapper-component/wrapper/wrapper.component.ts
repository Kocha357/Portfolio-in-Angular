import { Component, HostListener, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  constructor(readonly sharedService: SharedService) {}
  ngOnInit(): void {
    this.handleScreenResolution();
  }

  private handleScreenResolution(): void {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    this.sharedService.isDesktop$.next(window.innerWidth >= 1280);
  }
  @HostListener('window:resize') onResize(event: any): void {
    this.handleScreenResolution();
    setTimeout(this.handleScreenResolution.bind(this), 100);
    setTimeout(this.handleScreenResolution.bind(this), 300);
  }
  scrollTo(componentId: string) {
    const component = document.getElementById(componentId);
    if (component) {
      const elementRect = component.getBoundingClientRect();
      window.scrollBy({
        top: elementRect.top - 50,
        behavior: 'smooth',
      });
    }
  }
}
