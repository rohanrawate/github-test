import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() filterControl;
  @Input() sortControl;

  constructor() { }

  ngOnInit() {
  }

}
