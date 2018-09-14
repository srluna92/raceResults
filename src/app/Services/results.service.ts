import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { RaceResults, RaceInformation } from '../Models/models.index';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  years = new BehaviorSubject<String[]>(new Array<String>());
  raceNames = new BehaviorSubject<RaceInformation[]>(new Array<RaceInformation>());
  results = new BehaviorSubject<RaceResults[]>(null);

  selectedYear = new BehaviorSubject<String>('');
  selectedRace = new BehaviorSubject<String>('');

  getYears(): void {
    this.fire.collection('Information').doc('Information').valueChanges().subscribe( info => this.years.next(info['years']));
  }

  getRaceNames(year: String): void {
    this.fire.collection('Races').doc(year.toString()).valueChanges().subscribe((info: RaceInformation) => this.raceNames.next(info['Races']));
  }

  getRaceResults(year: string, name: string): void {
    this.fire.collection('Races').doc(year).collection(name).valueChanges().subscribe((results: RaceResults[]) => this.results.next(results));
  }

  constructor(private fire: AngularFirestore) { }
}
