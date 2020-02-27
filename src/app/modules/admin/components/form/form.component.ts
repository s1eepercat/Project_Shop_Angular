import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RequestsService } from '../../../../services/requests.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  id: number;
  isEditMode: boolean = false;
  checkboxChecked: boolean = false;
 
  itemForm: FormGroup;
  nameControl = new FormControl('', [Validators.required, Validators.maxLength(30)]);
  priceControl = new FormControl('', [Validators.required, Validators.min(0), Validators.max(9999)]);
  imageControl = new FormControl('/1.jpg');
  discountControl = new FormControl('', [Validators.min(0), Validators.max(99)]);
  
  constructor(
    private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute, 
    private requestsService: RequestsService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group(this.setInitialFormValues(this.nameControl,this.priceControl,this.imageControl,this.discountControl));
    this.queryStringHasId() && this.findItem();
  }

  findItem(): void {
    this.requestsService.getItem(this.id).subscribe( 
      response => {
        response['discount'] ? this.checkboxChecked = true : this.checkboxChecked;
        this.itemForm.setValue(this.setFormValuesFrom(response));
        this.isEditMode = true;
      }, 
      error => alert(error));
  }

  onDelete(): void {
    this.requestsService.deleteItem(this.id).subscribe(
      response => {this.announceAndRedirect(response, true)}, 
      error => alert(error));
  }

  onFormSubmit(): void {
    if (this.isEditMode) {
      this.requestsService.putItem(this.id,this.setFormValuesFrom(this.itemForm.value)).subscribe(
        response => {this.announceAndRedirect(response, true)}, 
        error => alert(error))
    } else {
      this.requestsService.postItem(this.setFormValuesFrom(this.itemForm.value)).subscribe(
        response => {this.announceAndRedirect(response)}, 
        error => alert(error))
    }
  }

  setInitialFormValues(name: FormControl, price: FormControl, image: FormControl, discount: FormControl): object {
    return {
      name: name,
      price: price,
      image: image,
      discount: discount
    }
  }

  setFormValuesFrom(from: object): any {
    return {
      name: from['name'],
      price: from['price'],
      image: from['image'],
      discount: this.checkboxChecked ? from['discount'] : 0
    }
  }

  queryStringHasId(): number { 
    return this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'),10); 
  }

  announceAndRedirect(response:any, redirect?: boolean): void {
    alert(response);
    if (redirect) {
      this.router.navigate(['/shop/browse']);
    } else {
      this.router.navigate(['/admin']);
      this.itemForm.reset();
      this.itemForm.controls['image'].setValue('/1.jpg');
    }
  }
}