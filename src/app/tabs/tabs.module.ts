import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonModule } from '../button/button.module';
import { SelectEngineModule } from '../select-engine/select-engine.module';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ButtonModule,
    SelectEngineModule,
  ],
  exports: [TabsComponent],
})
export class TabsModule {}
