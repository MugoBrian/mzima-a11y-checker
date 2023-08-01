import { Component, Input } from '@angular/core';
import { Results } from '../interfaces/data.model';

@Component({
  selector: 'checker-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent {
  @Input() results!: Results;
  @Input() isLoading = false;
  @Input() error!:string;


}
