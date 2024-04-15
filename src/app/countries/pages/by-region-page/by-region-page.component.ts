import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})
export class ByRegionPageComponent implements OnInit{
  public countries:Country[] = [];
  public regions:Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?:Region;

  constructor(private CountriesService: CountriesService){}


  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.CountriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region:Region){
    this.selectedRegion = region
    this.CountriesService.searchRegion(region).subscribe(countries => {
      this.countries = countries
    });
  }
}
