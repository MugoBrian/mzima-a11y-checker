import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectEngineComponent } from './select-engine.component';


@NgModule({
  declarations: [SelectEngineComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [SelectEngineComponent],
})
export class SelectEngineModule { }
