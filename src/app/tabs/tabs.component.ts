import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';
import axe from 'axe-core';

@Component({
  selector: 'checker-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  public selectedTabIndex = 0;
  @ViewChild('codeContainer', { read: ViewContainerRef }) codeContainer:
    | ViewContainerRef
    | undefined;
  codeTestingForm!: FormGroup;
  engine!: string;
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
  // getEngine(engine: string){
  //   this.engine = engine;
  //   this.codeTestingForm.setValue({'tool':engine})
  // };

  runTest() {
    if (this.selectedTabIndex === 1) {
      const codeInput = this.codeTestingForm.get('codeInput')?.value;
      const tool = this.codeTestingForm.get('tool')?.value;
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      const iframeDocument =
        iframe.contentDocument || iframe.contentWindow?.document;
      const tempElement = document.createElement('div');

      if (this.codeContainer) {
        this.codeContainer.clear();
      }

      // Append the temporary element to the ViewContainerRef
      this.codeContainer?.element.nativeElement.appendChild(tempElement);
      tempElement.innerHTML = codeInput;

      console.log(tempElement);

      axe.run(tempElement, (err, results) => {
        if (err) throw err;

        // Handle the results
        if (results.violations.length > 0) {
          console.error('Accessibility violations:', results.violations);
          // You can display the violations or take other actions here
        } else {
          console.log('No accessibility violations found.');
          // Provide feedback to the user indicating accessibility is okay
        }
        this.codeContainer?.element.nativeElement.removeChild(tempElement);
      });

      console.log(this.dataService.checkUrl(codeInput, tool));
    }
  }
  // checkUrl(codeInput: string) {
  //   // axe.run(codeInput, (err: unknown, results: unknown)=>{
  //   //   if(err) throw err;
  //   //   return results;
  //   // })
  // }

  // checkCode() {}
}
