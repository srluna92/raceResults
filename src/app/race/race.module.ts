import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceComponent } from './race.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RaceComponent],
  exports: [RaceComponent]
})
export class RaceModule { }
