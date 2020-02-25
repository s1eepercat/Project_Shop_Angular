import { Component, OnInit, Input } from '@angular/core';

import { item } from '../../../../models/item.model';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() singleItem: item;

  constructor() { }

  ngOnInit(): void {  }

}
