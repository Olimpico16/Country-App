import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap,  } from 'rxjs';
import { Country, Name } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  public country!: Country;
  public info? = 'aa'

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private CountriesService:CountriesService,
    ){}

  ngOnInit(): void {

    this.activatedRoute.params.pipe(
        switchMap(({id}) => this.CountriesService.searchCountryByAlphaCode(id))
      ).subscribe( country => {
        if(!country) {
          return this.router.navigateByUrl('')
        }
        return this.country = country
      } )
  }

  get getCurrency(){
    const [currency] = Object.entries(this.country?.currencies);
    const {0:moneda, 1:{name, symbol}} = currency;
    return `${moneda} - ${name} - ${symbol}`;
  }


}
