import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'checker-select-engine',
  templateUrl: './select-engine.component.html',
  styleUrls: ['./select-engine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectEngineComponent implements OnInit, OnChanges {
  engines: string[] = ['AXE', 'Web AIM', 'IBM'];
  selectedEngine!: string;
  @Input() form!: FormGroup;

  ngOnInit() {
    console.log(this.selectedEngine);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.selectedEngine);
  }

  @Output() selectedEngineChange = new EventEmitter<string>();

  selectedTool() {
    console.log(this.selectedEngine);
    this.form.get('tool')?.patchValue(this.selectedEngine);
    console.log(this.form.getRawValue());
    this.selectedEngineChange.emit(this.selectedEngine);
  }
}
