import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Results } from '../../interfaces/data.model';

// import ace from 'accessibility-checker-engine';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchInput(userInput: string) {
    if (userInput.startsWith('https://') || userInput.startsWith('http://')) {
      userInput = userInput.trim();
      return this.checkAccessibility(
        '/api/accessibility-check/axe/url/',
        userInput
      );
    } else {
      return this.checkAccessibility(
        '/api/accessibility-check/axe/code/',
        userInput
      );
    }
    return;
  }

  checkAccessibility(url: string, userInput: string) {
    return this.http.post<Results>(url, { userInput });
  }

  fetchUrl(url: string) {
    return url;
  }
}
