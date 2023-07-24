import { HttpClient } from '@angular/common/http';
import { Injectable, ViewContainerRef } from '@angular/core';
import axe from 'axe-core';

// import ace from 'accessibility-checker-engine';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  
  
  async runAxeChecker(codeContainer: ViewContainerRef, htmlContent?: string, codeInput?: string) {
    const tempElement = document.createElement('div');

    if (htmlContent !== undefined) {
      tempElement.innerHTML = htmlContent;
    }
    if (codeInput !== undefined) {
      tempElement.innerHTML = codeInput;
    }

    if (codeContainer) {
      codeContainer.clear();
    }

    // Append the temporary element to the ViewContainerRef
    codeContainer?.element.nativeElement.appendChild(tempElement);

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
      codeContainer?.element.nativeElement.removeChild(tempElement);
    });
  }

  fetchUrl(codeInput: string){
    return this.http.get(codeInput, {responseType: 'text'});
  }

}
