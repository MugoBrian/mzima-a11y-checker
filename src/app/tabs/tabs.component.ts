import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'checker-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  public selectedTabIndex = 0;
  @ViewChild('codeContainer', { read: ViewContainerRef })
  codeContainer!: ViewContainerRef;
 
  codeTestingForm!: FormGroup;
  engine!: string;
  sanitizedHtmlContent: SafeHtml = '';
  fetchData$!: Observable<string>;

  constructor(private fb: FormBuilder, private dataService: DataService) {}
  ngOnInit(): void {
    this.codeTestingForm = this.fb.group({
      codeInput: [''],
      tool: [''],
    });
    console.log(this.selectedTabIndex);
  }
  engines: string[] = ['AXE', 'Web AIM', 'IBM'];
  selectedEngine!: string;

  runTest() {
    const codeInput = this.codeTestingForm.get('codeInput')?.value;
    if (codeInput.startsWith('https://') || codeInput.startsWith('http://')) {
      this.dataService.fetchUrl(codeInput).subscribe({
        next: (htmlContent: string) => {
          this.dataService.runAxeChecker(this.codeContainer, htmlContent);
        },
        error: (error: unknown) => {
          console.error('Error fetching website content:', typeof error);
        },
      });
    } else {
      // const apiUrl = `/api/${codeInput}`;
      this.dataService.runAxeChecker(this.codeContainer, codeInput);
    }
  }
}
