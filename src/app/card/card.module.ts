import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { CardComponent } from './card.component';


@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
  ],
  exports: [CardComponent],
})
export class CardModule { }
