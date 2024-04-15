import { Pipe, inject, type PipeTransform } from '@angular/core';
import { Country } from '../interfaces/country.interfaces';

@Pipe({
  name: 'appCurrencies',
  standalone: true,
})

export class CurrenciesPipe implements PipeTransform {

  public country!:Country

  transform( ){
    const [currency] = Object.entries(this.country?.currencies);
    const {0:moneda, 1:{name, symbol}} = currency;
    return `${moneda} - ${name} - ${symbol}`;
  }

  getCurrency(){
    const [currency] = Object.entries(this.country?.currencies);
    const {0:moneda, 1:{name, symbol}} = currency;
    return `${moneda} - ${name} - ${symbol}`;
  }

}
