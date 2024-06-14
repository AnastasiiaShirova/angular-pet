import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {Categories} from "../../shared/enums/categories.enum";
import {KeyValuePipe, NgForOf, NgIf} from "@angular/common";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {SheetsService} from "../../shared/services/sheets.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButton,
    NgForOf,
    KeyValuePipe,
    MatSlideToggle,
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
 constructor(public sheetService: SheetsService) {
 }
  protected readonly Categories = Categories;
  isSeller: boolean = false;
}
