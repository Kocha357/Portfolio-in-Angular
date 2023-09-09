import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { DataModel } from '../../app.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  getProjects$: BehaviorSubject<DataModel[]> = new BehaviorSubject<DataModel[]>(
    []
  );
  constructor(private readonly sharedService: SharedService) {}
  ngOnInit(): void {
    this.sharedService.getProjects().subscribe((res) => {
      this.getProjects$.next(res);
    });
  }
}
