import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  skillGroup: any[] = [
    {
      img: '../../../../assets/images/html-5.png',
      description: 'Advanced knowladge of HTML',
    },
    {
      img: '../../../../assets/images/css-3.png',
      description: 'Advanced knowladge of CSS',
    },
    {
      img: '../../../../assets/images/Sass.png',
      description: 'Advanced knowladge of SCSS',
    },
    {
      img: '../../../../assets/images/bootstrap.png',
      description: 'Basic knowladge of Bootstrap',
    },
    {
      img: '../../../../assets/images/java-script.png',
      description: 'Advanced knowladge of JavaScript',
    },
    {
      img: '../../../../assets/images/typescript.png',
      description: 'Advanced knowladge of TypeScript',
    },
    {
      img: '../../../../assets/images/angular.png',
      description: 'Advanced knowladge of Angular',
    },
  ];
  activeGroupingTab: string = 'aboutTab';

  constructor(
    readonly sharedService: SharedService,
    public location: Location,
    public router: Router
  ) {}
  ngOnInit(): void {
    const url = this.location.path();
    const params = new URLSearchParams(url);
    const activeTab = params.get('activeTab') || 'aboutTab';
    this.showTab(activeTab);
  }
  showTab(tab: string) {
    this.activeGroupingTab = tab;
    const queryParams = { activeTab: tab };
    this.router.navigate([], { queryParams: queryParams });
  }
}
