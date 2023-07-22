import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NgIconsModule } from '@ng-icons/core';
import { octMarkGithub } from '@ng-icons/octicons';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    NgIconsModule.withIcons({ octMarkGithub }),
    HttpClientModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
