import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderModule } from '../header/header.module';
import { MatIconModule } from '@angular/material/icon';
import { TabsModule } from '../tabs/tabs.module';
import { DataModule } from '../data/data.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, HeaderModule, MatIconModule, TabsModule, DataModule, MatProgressSpinnerModule],
  exports: [MainComponent],
})
export class MainModule {}
