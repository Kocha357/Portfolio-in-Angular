import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
} from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  @Output() scrollToComponentEvent = new EventEmitter<string>();
  constructor(
    private readonly sharedService: SharedService,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  close(): void {
    this.sharedService.openSideMenu$.next(false);
  }
  scrollTo(componentId: string) {
    this.scrollToComponentEvent.emit(componentId);
    this.close();
  }
}
