import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataService } from '../services/data/data.service';
import { SafeHtml } from '@angular/platform-browser';
import { Results } from '../interfaces/data.model';
import { Engine } from '../interfaces/engine.interface';
import { EngineService } from '../services/engines/engines.service';

@Component({
  selector: 'checker-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() color = 'custom';

  codeTestingForm!: FormGroup;
  engine!: string;
  results!: Results;
  isLoading = false;
  engines!: Engine[];
  selectedEngine!: string;

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
    this.isLoading = true;
    console.log("This is the User's input", userInput);
    this.dataService.fetchInput(userInput)?.subscribe((data) => {
      // this.isLoading = true
      console.log('Results', data);
      this.results = data;
      this.isLoading = false;
    });
  }
}
