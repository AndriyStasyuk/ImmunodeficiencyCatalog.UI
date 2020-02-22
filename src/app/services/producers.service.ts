import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { serverURL } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProducersService {

  constructor(private httpClient: HttpClient) { }
  public get(): Observable<any> { 
    return this.httpClient.get<any>(`${serverURL}/Producers`);
  }
}
