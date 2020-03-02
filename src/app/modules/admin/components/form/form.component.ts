import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RequestsService } from '../../../../services/requests.service';

import { Image } from '../../../../models/image.model';
import ImageData from '../../../../data/image-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  private readonly DEFAULT_IMAGE = "/1.jpg";
  isEditMode = false;
  isCheckboxChecked = false;
  images = ImageData;
  id: number;
  status: any;
  itemForm: FormGroup;
  imageControl = new FormControl(this.DEFAULT_IMAGE);
  discountControl = new FormControl('', [Validators.min(0), Validators.max(99)]);
  image: Image;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private requestsService: RequestsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.handleQueryParams();
    this.buildForm();
  }

  onDelete() {
    this.requestsService.deleteItem(this.id).subscribe(
      response => {
        this.status = response;
        this.handleNavigation(true);
      },
      error => this.status = error
    );
  }

  onFormSubmit() {
    this.discountControl.setValue(this.isCheckboxChecked ? this.discountControl.value : 0);
    this.isEditMode ? this.update() : this.create();
  }

  private create() {
    this.requestsService.createItem(this.itemForm.value).subscribe(
      response => {
        this.status = response;
        this.handleNavigation();
      },
      error => this.status = error
    );
  }

  private update() {
    this.requestsService.updateItem(this.id, this.itemForm.value).subscribe(
      response => {
        this.status = response;
        this.handleNavigation(true);
      },
      error => this.status = error
    );
  }

  private buildForm() {
    this.itemForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      price: new FormControl('', [Validators.required, Validators.min(0), Validators.max(9999)]),
      image: this.imageControl,
      discount: this.discountControl
    });
  }

  private handleQueryParams() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    if (this.id) {
      this.isEditMode = true;
      this.findItem();
    }
  }

  private findItem() {
    this.requestsService.findItem(this.id).subscribe(
      response => {
        this.isCheckboxChecked = !!response.discount;
        const formedResponse = { ...response }
        delete formedResponse.id
        this.itemForm.setValue(formedResponse);
        this.status = response;
      });
  }

  private handleNavigation(redirect?: boolean) {
    if (redirect) {
      this.router.navigate(['/shop/browse']);
    } else {
      this.router.navigate(['/admin']);
      this.itemForm.reset();
      this.imageControl.setValue(this.DEFAULT_IMAGE);
    }
  }
}
