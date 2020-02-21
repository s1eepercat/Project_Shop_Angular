import { Component, OnInit } from '@angular/core';

import { Item } from '../../../../models/Item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  items: Item[];

  constructor() { }

  setLabel(currentItem:any) {
    let classes = {
      "items__item": true,
      "items__item--sale": currentItem.discount
    }
    return classes
  }

  ngOnInit(): void {
    this.items = [
      {
        id: 1,
        title: "lalala",
        price: 200,
        image: "assets/1.jpg",
        discount: 15
      },
      {
        id: 2,
        title: "tratata",
        price: 50,
        image: "assets/2.jpg",
        discount: 0
      },
      {
        id: 3,
        title: "hahaha",
        price: 75,
        image: "assets/3.jpg",
        discount: 75
      }
    ]
  }

}
