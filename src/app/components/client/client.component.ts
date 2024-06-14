import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CardComponent} from "../../shared/components/card/card.component";
import {ProductInfo} from "../../shared/interfaces/product-card.interface";
import {SheetsService} from "../../shared/services/sheets.service";
import {NgForOf, NgIf} from "@angular/common";
import {BagComponent} from "./components/bag/bag.component";
import {HeaderComponent} from "../../layout/header/header.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf,
    NgIf,
    BagComponent,
    HeaderComponent
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientComponent implements OnInit {
  constructor(private sheetsService: SheetsService, private changeDetection: ChangeDetectorRef) {
  }

  allProducts: ProductInfo[] = [];
  isBagOpened = false;

  ngOnInit() {
    this.sheetsService.filteredCategories.subscribe((val) => {
        this.allProducts = val;
        this.changeDetection.detectChanges();
      }
      );
  }
}
