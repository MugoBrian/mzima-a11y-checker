import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderModule } from '../header/header.module';
import { MatIconModule } from '@angular/material/icon';
import { TabsModule } from '../tabs/tabs.module';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MatIconModule,
    TabsModule,
  ],
  exports: [MainComponent],
})
export class MainModule { }
