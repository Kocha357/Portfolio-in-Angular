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
    return this.http.get<any[]>('./assets/jsonData/info.json').pipe(
      map((response) => {
        if (!response || response.length === 0) {
          throw new Error('No data received from the server');
        }

        const data: DataModel[] = response.map(
          (item: any) =>
            new DataModel({
              image: item.image,
              description: item.description,
              githubUrl: item.githubUrl,
              githubPagesUrl: item.githubPagesUrl,
            })
        );

        return data; // Return the transformed data as an array of DataModel
      })
    );
  }
}
