import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EXrate} from '../models/rateModels';
import {config} from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class CurrEX {
  constructor(private httpClient: HttpClient){}
  ps6url = config.app_url;
  getRates(): Observable<EXrate[]> {return this.httpClient.get<EXrate[]>(this.ps6url);}
}
