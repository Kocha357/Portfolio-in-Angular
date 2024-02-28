import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { ProjectInfo } from '../../app.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  realProjects$: BehaviorSubject<ProjectInfo[]> = new BehaviorSubject<
    ProjectInfo[]
  >([]);
  practiceProjects$: BehaviorSubject<ProjectInfo[]> = new BehaviorSubject<
    ProjectInfo[]
  >([]);
  constructor(private readonly sharedService: SharedService) {}
  ngOnInit(): void {
    this.sharedService.getProjects().subscribe((res) => {
      this.realProjects$.next(res[0]);
      this.practiceProjects$.next(res[1]);
    });
  }
}
