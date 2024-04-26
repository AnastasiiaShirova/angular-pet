import {Component, Input} from '@angular/core';
import {BagService} from "../../../../shared/services/bag.service";
import {
  MatCell,
  MatCellDef,
  MatColumnDef, MatFooterCell, MatFooterCellDef, MatFooterRow, MatFooterRowDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {KeyValuePipe, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-bag',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    KeyValuePipe,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatFooterRow,
    MatFooterRowDef,
    MatFooterCell,
    MatFooterCellDef,
    MatButton,
    NgIf,
    RouterLink
  ],
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.scss'
})
export class BagComponent {
  @Input() isButtonHidden: boolean = false;
  constructor(protected bagService: BagService){}
  displayedColumns: string[] = ['name', 'quantity', 'price'];
}
