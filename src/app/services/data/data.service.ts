import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Results } from '../../interfaces/data.model';
import { Engine } from 'src/app/interfaces/engine.interface';
import { Subject, takeUntil } from 'rxjs';

// import ace from 'accessibility-checker-engine';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  private cancel = new Subject<void>();

  fetchInput(userInput: string, engineArray: Engine[], tool: string) {
    const engine = engineArray.find((engine) => engine.name === tool);
    if (userInput.startsWith('https://') || userInput.startsWith('http://')) {
      userInput = userInput.trim();
      return this.checkAccessibility(`${engine?.url}url/`, userInput);
    } else {
      return this.checkAccessibility(`${engine?.url}code/`, userInput);
    }
  }

  checkAccessibility(url: string, userInput: string) {
    return this.http
      .post<Results>(url, { userInput })
      .pipe(takeUntil(this.cancel));
  }

  fetchUrl(url: string) {
    return url;
  }

  cancelRequest() {
    this.cancel.next();
    console.log('canceled');
  }
}
