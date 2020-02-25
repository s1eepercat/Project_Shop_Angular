import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { FindItemService } from '../../../../services/find-item/find-item.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  id: number;
  name: string;
  checkboxChecked: boolean;
 
  itemForm: FormGroup;
  nameControl = new FormControl('', [Validators.required, Validators.maxLength(30)]);
  priceControl = new FormControl('', [Validators.required, Validators.min(0), Validators.max(9999)]);
  imageControl = new FormControl('/1.jpg', [Validators.required]);
  discountControl = new FormControl('', [Validators.min(0), Validators.max(99)]);
  
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private findItemService: FindItemService) { }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      name: this.nameControl,
      price: this.priceControl,
      image: this.imageControl,
      discount: this.discountControl
    });

    this.checkForId() && this.findItem();
  }

  checkForId(): number { 
    return this.id = parseInt(this.route.snapshot.paramMap.get('id'),10); 
  }

  findItem(): void {
    this.findItemService.passId(this.id);
    this.findItemService.findItem().subscribe(
      res => {
        res['discount'] ? this.checkboxChecked = true : this.checkboxChecked = false;
        this.itemForm.controls.name.setValue(res['name']);
        this.itemForm.controls.price.setValue(res['price']);
        this.itemForm.controls.image.setValue(res['image']);
        this.itemForm.controls.discount.setValue(res['discount']);
      },
      err => console.log(`Something went wrong, response status is: ${err.status}.`)
    )
  }

  onFormSubmit(): void {
    //Submit 
    //reset form
    console.log(this.itemForm.value);
  }
}