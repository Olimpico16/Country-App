import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

  constructor(){}


}
