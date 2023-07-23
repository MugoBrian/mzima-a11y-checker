import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axe, { ElementContext } from 'axe-core';

// import ace from 'accessibility-checker-engine';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  checkUrl(codeInput: string, engine: string) {
    if(engine === "Axe Dev"){
      return this.http.get<unknown>(codeInput).pipe((data)=>{
        return data;
      });

    }
    return null;
  }
  
  checkCode(codeInput: string, engine: string) {
    const code = codeInput + engine;
    // axe.run(code, (err: unknown, results: unknown)=>{
    //   if(err) throw err;
    //   return results;
    // })
  }
}
