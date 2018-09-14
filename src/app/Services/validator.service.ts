import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  validYear(year: string): boolean {
    return !!year && /^\d{4}$/g.test(year);
  }

  validRaceName(name: string): boolean {
    return !!name && /^[\w\s]+$/g.test(name);
  }

  constructor() { }
}
