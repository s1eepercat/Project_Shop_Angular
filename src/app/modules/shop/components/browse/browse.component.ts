import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../../services/requests.service';

import { Item } from '../../../../models/Item.model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  items: Item[];

  constructor(private requestsService: RequestsService) { }

  ngOnInit() {
    this.requestsService.getItems().subscribe(
      res => this.items = res,
      err => console.log(err)
    );
  }
}
