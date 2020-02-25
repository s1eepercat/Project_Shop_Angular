import { Component, OnInit } from '@angular/core';
import { GetItemsService } from '../../../../services/get-items/get-items.service';

import { item } from '../../../../models/item.model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  items: item[];

  constructor(private getItemsService: GetItemsService) { }

  ngOnInit(): void {
    this.getItemsService.getItems().subscribe(
      res => this.items = res,
      err => console.log(`Something went wrong, response status is: ${err.status}.`)
    );
  }
}
