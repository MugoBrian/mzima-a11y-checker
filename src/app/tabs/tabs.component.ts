import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data/data.service';
import { Results } from '../interfaces/data.model';
import { Engine } from '../interfaces/engine.interface';
import { EngineService } from '../services/engines/engines.service';

@Component({
  selector: 'checker-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class TabsComponent implements OnInit {
  @Input() color = 'custom';

  codeTestingForm!: FormGroup;
  engine!: string;
  results!: Results;
  isLoading = false;
  engines!: Engine[];
  selectedEngine!: string;
  @Input() custom = 'custom';
  error!: string;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private engineService: EngineService
  ) {}
  ngOnInit(): void {
    this.codeTestingForm = this.fb.group({
      userInput: [
        '',
        {
          updateOn: onblur,
          validators: [Validators.required],
        },
      ],
      tool: ['', [Validators.required]],
    });
    this.engines = this.engineService.getEngines();
  }

  runTest() {
    const userInput = this.codeTestingForm.get('userInput')?.value;
    const tool = this.codeTestingForm.get('tool')?.value;
    this.isLoading = true;
    console.log("This is the User's input", userInput);
    console.log(tool);
    console.log(this.selectedEngine);
    this.dataService
      .fetchInput(userInput, this.engines, tool)
      ?.subscribe({
        next: (data: Results) => {
          // this.isLoading = true
          console.log('Results', data);
          this.results = data;
          this.isLoading = false;
        },
        error: (error)=>{
          this.error = error.error.statusText;
          console.log(this.error);
          this.isLoading = false;
        }
      })
  }

  cancelTest() {
    this.dataService.cancelRequest();
    this.isLoading = false
    this.results;
  }
}
