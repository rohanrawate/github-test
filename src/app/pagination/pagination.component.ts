import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gt-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page: number;
  @Input() count: number;
  @Input() perPage: number;

  @Output() selectPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onPrev(): void {
    this.selectPage.emit(--this.page);
  }

  onNext(next: boolean): void {
    this.selectPage.emit(++this.page);
  }

  onPage(pageNumber) {
    this.page = pageNumber;
    this.selectPage.emit(this.page);
  }

  totalPages(): number {
    return Math.ceil(this.count / this.perPage) || 0;
  }

  lastPage(): boolean {
    return this.perPage * this.page > this.count;
  }

  getPages(): number[] {
    const c = this.totalPages();
    const p = this.page || 1;
    const pagesToShow = 5;
    const pages: number[] = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }

}
