import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

import { GithubUser } from '../shared/types';
import { AppService } from '../app.service';
@Component({
  selector: 'gt-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  animations: [
    trigger('slideDown', [
      state('show', style({
        height: '300px',
      })),
      state('hide', style({
        height: '130px',
      })),
      transition('show => hide', animate('200ms ease-in-out')),
      transition('hide => show', animate('200ms ease-in-out'))
    ]),
    trigger('showHideDiv', [
      state('show', style({
        opacity: '1'
      })),
      state('hide', style({
        opacity: '0'
      })),
      transition('show => hide', animate('400ms ease-in-out')),
      transition('hide => show', animate('400ms ease-in-out'))
    ]),
  ]
})
export class UserCardComponent implements OnInit {
  @Input() user: GithubUser;
  showDetails;
  showMore;
  userRepo;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.showDetails = 'hide';
    this.showMore = 'hide';

  }

  showInfo() {
    this.showDetails = this.showDetails === 'hide' ? 'show' : 'hide';
    this.showMore = this.showMore === 'hide' ? 'show' : 'hide';
    if (this.showDetails === 'show') {
      this.getUserRepos(this.user.login);
    }
  }

  getUserRepos(username: string) {
    this.appService.getUserRepos(username)
    .subscribe((data) => {
      this.userRepo = data;
    });
  }

}
