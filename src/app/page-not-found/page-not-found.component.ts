import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-page-not-found',
  template: `
    <div>
      Sorry, Page Not Found.
    </div>
  `,
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
