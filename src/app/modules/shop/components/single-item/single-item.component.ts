import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FindItemService } from '../../../../services/find-item/find-item.service';

import { item } from '../../../../models/item.model';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() singleItem: item;

  constructor(private findItemService: FindItemService, private router: Router) { }

  ngOnInit(): void {  }

  edit(id:number) :void {
    this.findItemService.passId(id);
    this.findItemService.findItem().subscribe(
      res => {
        this.router.navigate(['/admin']);

        //PREFILL FORM HERE

        console.log(res);
      },
      err => console.log(`Something went wrong, response status is: ${err.status}.`)
    )
  }
}
