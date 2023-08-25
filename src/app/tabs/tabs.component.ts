import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data/data.service';
import { Results } from '../interfaces/data.model';
import { Engine } from '../interfaces/engine.interface';
import { EngineService } from '../services/engines/engines.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'checker-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class TabsComponent implements OnInit {
  codeTestingForm!: FormGroup;
  engine!: string;
  results: Results = { violations: [] };
  isLoading = false;
  engines!: Engine[];
  selectedEngine!: string;
  error!: string;
  activeTab = 1;
  isRequired = true;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private engineService: EngineService
  ) {}
  ngOnInit(): void {
    this.codeTestingForm = this.fb.group({
      urlInput: ['', { updateOn: 'blur' }],
      codeInput: ['', { updateOn: 'blur' }],
      tool: ['', [Validators.required]],
    });
    this.engines = this.engineService.getEngines();
  }

  switchTabs(tabNumber: number) {
    this.activeTab = tabNumber;

    const urlControl = this.codeTestingForm.get('urlInput');
    const codeControl = this.codeTestingForm.get('codeInput');

    if (this.activeTab === 1) {
      urlControl?.setValidators([Validators.required]);
      codeControl?.clearValidators();
    } else {
      codeControl?.setValidators([Validators.required]);
      urlControl?.clearValidators();
    }

    urlControl?.updateValueAndValidity();
    codeControl?.updateValueAndValidity();
  }

  runTest() {
    const userInput = this.codeTestingForm.get(
      this.activeTab === 1 ? 'urlInput' : 'codeInput'
    )?.value;
    const tool = this.codeTestingForm.get('tool')?.value;
    this.isLoading = true;
    if (this.results.violations) this.results.violations = [];
    console.log("This is the User's input", userInput);
    console.log(tool);
    this.dataService.fetchInput(userInput, this.engines, tool)?.subscribe({
      next: (data: Results) => {
        // this.isLoading = true
        console.log('Results', data);
        this.results = data;
        this.isLoading = false;
        this.error = '';
      },
      error: (error: HttpErrorResponse) => {
        switch (error.status) {
          case 504:
            this.error =
              'Oops! We are experienceing some trouble with the server';
            break;
          case 400:
            this.error = 'Oops! Please enter a valid input';
            break;
          case 404:
            this.error = "Oops! We couldn't find the tool you entered";
            break;
          case 500:
            this.error = error.error.error;
            break;
          default:
            break;
        }
        console.log(error);
        this.isLoading = false;
      },
    });
  }

  cancelTest() {
    this.dataService.cancelRequest();
    this.error = 'You canceled the request!';
    this.isLoading = false;
    this.results;
  }
}
