import { Component, Input } from '@angular/core';
import { Violations } from '../interfaces/data.model';

@Component({
  selector: 'checker-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() result!: Violations;
}
