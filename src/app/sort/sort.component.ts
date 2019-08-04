import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SortOptions } from '../shared/sort.enum';

@Component({
  selector: 'gt-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  @Input() sortControl: FormControl;
  options;

  constructor() { }

  ngOnInit() {
    this.options = SortOptions;
  }

}
