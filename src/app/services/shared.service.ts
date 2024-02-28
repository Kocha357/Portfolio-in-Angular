import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProjectCategory, ProjectInfo } from '../components/app.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isDesktop$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  openSideMenu$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private readonly http: HttpClient) {}

  getProjects(): Observable<ProjectCategory> {
    return this.http.get<ProjectCategory>('./assets/jsonData/info.json').pipe(
      map((response) => {
        if (!response || response[0].length === 0 || response[1].length === 0) {
          throw new Error('No data received from the server');
        }
        const data = response;
        return data; // Return the transformed data as an array of ProjectInfo
      })
    );
  }
}
