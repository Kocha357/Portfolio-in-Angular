import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataModel } from '../components/app.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  isDesktop$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  openSideMenu$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private readonly http: HttpClient) {}

  getProjects(): Observable<DataModel[]> {
    return this.http.get<DataModel[]>('./assets/jsonData/info.json').pipe(
      map((response) => {
        if (!response || response.length === 0) {
          throw new Error('No data received from the server');
        }
        const data: DataModel[] = [];
        response.forEach((res) =>
          data.push(
            new DataModel({
              image: res.image,
              description: res.description,
              githubUrl: res.githubUrl,
              githubPagesUrl: res.githubPagesUrl,
            })
          )
        );

        return data; // Return the transformed data as an array of DataModel
      })
    );
  }
}
