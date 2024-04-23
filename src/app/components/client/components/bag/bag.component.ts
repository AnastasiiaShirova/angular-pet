import { Component } from '@angular/core';
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
import {KeyValuePipe} from "@angular/common";
import {MatButton} from "@angular/material/button";

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
    MatButton
  ],
  templateUrl: './bag.component.html',
  styleUrl: './bag.component.scss'
})
export class BagComponent {
  constructor(protected bagService: BagService) {}
  displayedColumns: string[] = ['name', 'quantity', 'price'];
}
