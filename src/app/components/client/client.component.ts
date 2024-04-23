import {Component, OnInit} from '@angular/core';
import {CardComponent} from "../../shared/components/card/card.component";
import {ProductInfo} from "../../shared/interfaces/product-card.interface";
import {SheetsService} from "../../shared/sheets.service";
import {NgForOf, NgIf} from "@angular/common";
import {BagComponent} from "./components/bag/bag.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
    CardComponent,
    NgForOf,
    NgIf,
    BagComponent
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent implements OnInit {
  constructor(private sheetsService: SheetsService) {
  }

  allProducts: ProductInfo[] = [];
  isBagOpened = false;
  ngOnInit() {
    this.sheetsService.filteredCategories.subscribe((val) => this.allProducts = val);
  }
}
