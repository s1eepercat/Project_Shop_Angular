import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Item } from '../../../../models/item.model';

import { RequestsService } from '../../../../services/requests.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  isEditMode = false;
  isCheckboxChecked = false;
  defaultImage = "/1.jpg";
  id: number;
  itemForm: FormGroup;

  defaultControls = {
    nameControl: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    priceControl: new FormControl('', [Validators.required, Validators.min(0), Validators.max(9999)]),
    imageControl: new FormControl(this.defaultImage),
    discountControl: new FormControl('', [Validators.min(0), Validators.max(99)])
  }

  constructor(
    private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute, 
    private requestsService: RequestsService,
    private router: Router
    ) {}

  ngOnInit() {
    this.itemForm = this.formBuilder.group(this.setInitialFormValues(this.defaultControls));
    this.queryStringHasId() && this.findItem();
  }

  findItem() {
    this.requestsService.findItem(this.id).subscribe( 
      response => {
        response.discount ? this.isCheckboxChecked = true : this.isCheckboxChecked;
        this.itemForm.setValue(this.setFormValuesFrom(response));
        this.isEditMode = true;
      }, 
      error => alert(error));
  }

  onDelete() {
    this.requestsService.deleteItem(this.id).subscribe(
      response => this.afterSubmitSuccess(response, true), 
      error => alert(error));
  }

  onFormSubmit() {
    if (this.isEditMode) {
      this.requestsService.updateItem(this.id,this.setFormValuesFrom(this.itemForm.value)).subscribe(
        response => this.afterSubmitSuccess(response, true), 
        error => alert(error))
    } else {
      this.requestsService.createItem(this.setFormValuesFrom(this.itemForm.value)).subscribe(
        response => this.afterSubmitSuccess(response), 
        error => alert(error))
    }
  }

  setInitialFormValues(from: any) {
    return {
      name: from.nameControl,
      price: from.priceControl,
      image: from.imageControl,
      discount: from.discountControl
    }
  }

  setFormValuesFrom(from: Item) {
    return {
      name: from.name,
      price: from.price,
      image: from.image,
      discount: this.isCheckboxChecked ? from.discount : 0
    }
  }

  queryStringHasId() { 
    return this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'),10); 
  }

  afterSubmitSuccess(response:any, redirect?: boolean) {
    alert(response);
    if (redirect) {
      this.router.navigate(['/shop/browse']);
    } else {
      this.router.navigate(['/admin']);
      this.itemForm.reset();
      this.itemForm.controls['image'].setValue(this.defaultImage);
    }
  }
}