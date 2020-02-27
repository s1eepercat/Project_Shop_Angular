import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../../../models/item.model';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() singleItem: Item;

  constructor() { }

  ngOnInit(): void {  }

}
