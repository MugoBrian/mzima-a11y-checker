import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
import axe, { ElementContext } from 'axe-core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}
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
    if (this.selectedTabIndex === 1) {
      this.dataService.runAxeChecker(this.codeContainer,codeInput);
      // Fetch the HTML Content
    } else if (this.selectedTabIndex === 0) {
      this.http.get(codeInput, { responseType: 'text' }).subscribe(
        (htmlContent: string) => {
          this.dataService.runAxeChecker(this.codeContainer, htmlContent);
        },
        (error: unknown) => {
          console.error('Error fetching website content:', typeof(error));
        }
      );
    }
  }
}
