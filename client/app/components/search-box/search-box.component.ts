import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {
  placeholder = 'Search for a release...';

  @Input()
  searchTerm: string;

  @Output()
  onSearch = new EventEmitter<string>();

  constructor(private store: Store<fromRoot.State>) { }
}
