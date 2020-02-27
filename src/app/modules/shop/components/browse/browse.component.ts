import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../../services/requests.service';

import { item } from '../../../../models/item.model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  items: item[];

  constructor(private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.requestsService.getItems().subscribe(
      res => this.items = res,
      err => console.log(err)
    );
  }
}
