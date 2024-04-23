import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {KeyValuePipe, NgForOf} from "@angular/common";
import {Categories} from "../../shared/enums/categories.enum";
import {MatButton} from "@angular/material/button";
import {SheetsService} from "../../shared/sheets.service";
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-seller',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgForOf,
    KeyValuePipe,
    MatButton
  ],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.scss'
})
export class SellerComponent {
  sellerForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    photo: new FormControl(null, Validators.required),
    weight: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    quantity: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required)
  });
  protected readonly Categories = Categories;

  constructor(private sheetsService: SheetsService, private _snackBar: MatSnackBar) {
  }
  addItem(){
    this.sheetsService.addProduct(this.sellerForm.getRawValue())
      .subscribe(() => {
        this.sellerForm.reset();
        this.openSnackBar()
      })
  }
  openSnackBar() {
    this._snackBar.open("Товар добавлен!", '',{
      duration: 3000
    });
  }
}
