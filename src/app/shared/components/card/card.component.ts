import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ProductInfo} from "../../interfaces/product-card.interface";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {BagService} from "../../services/bag.service";
import {SheetsService} from "../../sheets.service";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgOptimizedImage, NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() productCard!:ProductInfo;
  constructor(public bagService: BagService, public sheetService: SheetsService) {}

}
