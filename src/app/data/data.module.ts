import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardModule } from '../card/card.module';


@NgModule({
  declarations: [DataComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    CardModule,
  ],
  exports: [DataComponent],
})
export class DataModule {}
