import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';
import { SearchParams } from './shared/types';

@Component({
  selector: 'gt-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  obj: SearchParams = {name: 'r', page: '', per_page: ''};
  obj1 = 'rohan';

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getGithubUsers(this.obj);
    this.getUserRepos(this.obj1);
  }

  getGithubUsers(obj: SearchParams) {
    this.appService.fetchGithubUsers(obj)
    .subscribe((data) => {
      console.log(data);
    });
  }

  getUserRepos(username: string) {
    this.appService.getUserRepos(username)
    .subscribe((data) => {
      console.log(data);
    });
  }
}
