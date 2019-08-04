import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { SearchParams } from './shared/types/github.type';
import { APP_CONFIG } from './shared/injection-tokens';
import { AppConfigGlobal } from './shared/types';
import { GithubUserResponse } from './shared/types';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(@Inject(APP_CONFIG) public config: AppConfigGlobal,
              private http: HttpClient) { }

  fetchGithubUsers(searchParams: SearchParams): Observable<GithubUserResponse> {

    const params = new HttpParams()
    .set('q', searchParams.name)
    .set('page', String(searchParams.page))
    .set('per_page', String(searchParams.per_page));

    return this.http.get<GithubUserResponse>(this.config.api.getGithubUser.url, { params })
     .pipe(
       map((res) => res)
     );
  }

  getUserRepos(username) {
    const repoUrl = `${this.config.api.getUserRepos.url}/${username}/repos`;
    return this.http.get(repoUrl)
     .pipe(
       map((res) => res)
     );
  }
}
