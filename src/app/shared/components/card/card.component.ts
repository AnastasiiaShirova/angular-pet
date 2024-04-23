import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {SheetsService} from "../../sheets.service";
import {ProductInfo} from "../../interfaces/product-card.interface";
import {NgOptimizedImage} from "@angular/common";
import {BagService} from "../../services/bag.service";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() productCard!:ProductInfo;
  constructor(private sheetService: SheetsService, public bagService: BagService) {}

}
