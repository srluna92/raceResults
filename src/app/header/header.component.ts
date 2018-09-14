import { Component, OnInit } from '@angular/core';
import { ResultsService, ValidatorService } from '../Services/services.index';
import { Router, RoutesRecognized } from '@angular/router';
import { RaceInformation } from '../Models/models.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  years: String[]
  races: RaceInformation[]
  selectedYear: string
  selectedRace: string

  constructor(
    private resultsService: ResultsService,
    private validatorService: ValidatorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resultsService.years.asObservable().subscribe(y => this.years = y)
    this.resultsService.raceNames.asObservable().subscribe(r => this.races = r)

    if (!this.years || !this.years.length) {
      this.resultsService.getYears()
    }

    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        this.selectedRace = val.state.root.firstChild.params.name
        this.selectedYear = val.state.root.firstChild.params.year

        this.getRaces()
        this.getResults()
      }
    })
  }

  getRaces(): void {
    if (this.validatorService.validYear(this.selectedYear)) this.resultsService.getRaceNames(this.selectedYear)
  }

  getResults(): void {
    if (this.validatorService.validYear(this.selectedYear) && this.validatorService.validRaceName(this.selectedRace))
      this.resultsService.getRaceResults(this.selectedYear, this.selectedRace)
  }

}
