import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent implements OnInit{

  public countries:Country[] = [];
  public isLoading:boolean = false;
  public initialValue:string = '';

  constructor(private CountriesService: CountriesService){}

  ngOnInit(): void {
      this.countries = this.CountriesService.cacheStore.byCapital.countries;
      this.initialValue = this.CountriesService.cacheStore.byCapital.term;
  }

  searchByCapital(term:string){

    this.isLoading = true;

    this.CountriesService.searchCapital(term).subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    });
  }

}
