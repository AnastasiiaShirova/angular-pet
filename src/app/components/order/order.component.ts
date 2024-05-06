import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BagService} from "../../shared/services/bag.service";
import {BagComponent} from "../client/components/bag/bag.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatFormFieldModule, MatLabel, MatPrefix} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from "@angular/material/core";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    BagComponent,
    ReactiveFormsModule,
    MatLabel,
    MatIcon,
    MatPrefix,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButton,
  ],
  providers: [provideNativeDateAdapter(), { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent {
  orderForm: FormGroup = new FormGroup({
    clientName: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    street: new FormControl(null, Validators.required),
    houseNumber: new FormControl(null, Validators.required),
    corps: new FormControl(null),
    entrance: new FormControl(null, Validators.required),
    floor: new FormControl(null, Validators.required),
    flatNumber: new FormControl(null, Validators.required),
    dateOfDelivery: new FormControl(null, Validators.required),
    comment: new FormControl(null)
  })
  constructor(protected bagService: BagService) {}

}
