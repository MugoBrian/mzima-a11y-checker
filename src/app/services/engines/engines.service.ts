import { Injectable } from '@angular/core';
import EngineList from 'src/assets/engines/engines.json';
import { Engine } from 'src/app/interfaces/engine.interface';

@Injectable({
  providedIn: 'root',
})
export class EngineService {
  defaultEngine: Engine[] = [
    {
      name: 'Axe',
      url: 'api/accessibility-check/axe/',
    },
  ];
  getEngines() {
    if (EngineList.engines && EngineList.engines.length > 0) {
      return EngineList.engines;
    } else {
      return this.defaultEngine;
    }
  }
}
