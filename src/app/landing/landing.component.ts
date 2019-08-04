import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { startWith, distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { combineLatest, Observable, BehaviorSubject } from 'rxjs';

import { AppService } from '../app.service';
import { SearchParams } from '../shared/types';
import { GithubUserResponse } from '../shared/types';

@Component({
  selector: 'gt-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  searchText = new FormControl('', Validators.minLength(1));
  sortControl = new FormControl('');
  pageChange$ = new BehaviorSubject<number>(1);

  users = [];
  total: number;
  perPage = 3;
  sortFilterValue;
  sortFilter$;

  constructor(private appService: AppService) {}

  ngOnInit() {

    const searchFilter$ = this.searchText.valueChanges.pipe(startWith(''));
    this.sortFilter$ = this.sortControl.valueChanges.pipe(startWith(''));

    this.sortFilter$.subscribe(data => {
      this.sortFilterValue = data;
    });

    combineLatest(searchFilter$, this.pageChange$)
    .pipe(
      debounceTime(500),
      // distinctUntilChanged((prev, curr) => (prev[0] === curr[0]))
      distinctUntilChanged((prev, curr) => ((prev[0] === curr[0]) && (prev[1] === curr[1])))
    )
    .subscribe(
      ([name, page]) => {
        // console.log(sortStr);
        if (!!name) {
          this.getGithubUsers({name, page, per_page: 3});
        } else {
          this.reset();
        }
      },
    );
  }

  getGithubUsers(obj: SearchParams) {
    this.appService.fetchGithubUsers(obj)
    .subscribe((data: GithubUserResponse) => {
      this.users = data.items;
      this.total = data.total_count;
    });
  }

  reset() {
    this.users = [];
    this.total = 0;
    this.perPage = 3;
    this.pageChange$.next(1);
  }

  pageChange(pageNum) {
    this.pageChange$.next(pageNum);
  }
}
