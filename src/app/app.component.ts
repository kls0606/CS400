import {Component} from '@angular/core';
import {EXrate} from './models/rateModels';
import {CurrEX} from './services/exService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private Exchange: CurrEX) {}
  private selectRates: EXrate = null;

  rates = [];
  temp =[];

  getRates(temp: string): void {this.Exchange.getRates().subscribe(rates => {this.rates = rates;});
  }

}
