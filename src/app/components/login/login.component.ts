import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {LoginService} from "../../shared/services/login.service";
import {accounts} from "../../shared/const/login.const";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    "login": new FormControl("", Validators.required),
    "password": new FormControl("",
      [Validators.required, Validators.pattern("{^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$}")])
  });
  hide = true;

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }

  constructor(private loginService: LoginService, private _snackBar: MatSnackBar, private router: Router) {
  }

  openSnackBar() {
    this._snackBar.open("Неверный логин или пароль", '', {
      duration: 3000
    })
  }

  checkPassword() {
    let userData = this.loginForm.getRawValue();
    this.loginService.mockLogin(userData).subscribe((data) => {
        if (data === null) {
          this.openSnackBar();
        } else {
          this.router.navigate(['/seller']);
        }
      }
    );
  }
}
