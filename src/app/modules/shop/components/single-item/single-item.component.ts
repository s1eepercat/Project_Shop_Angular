import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../../../models/Item';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.scss']
})
export class SingleItemComponent implements OnInit {

  @Input() singleItem: Item;

  constructor() { }

  ngOnInit(): void {

  }

  setStandardClasses() {
    let classes = {
      "items__price" : true,
      "items__price--sale" : this.singleItem.discount
    }
    return classes
  }

  setDiscountClasses() {
    let classes = {
      "items__price" : true,
      "items__price--hidden" : !this.singleItem.discount
    }
    return classes
  }

  formatPrice(num:number) {
    let testString = num.toString();
    if (testString.indexOf('.') !== -1) {
        let str = (Math.round(num * 100)).toString();
        if (str.length >= 4) {
            return str.slice(0, str.length-2) + '.' + str.slice(str.length-2);
        } else {
            return '0.' + str.slice(str.length-2);
        }
    } else {
        return num + '.00'
    }
  }
}
