import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { serverURL } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddNewNotesService {

  constructor(private httpClient: HttpClient) { }
  public postNewNotes(request_body): Observable<any> { 
    return this.httpClient.post<any>(`${serverURL}/Rits`,request_body);
  }

  public postNewNotesStemCells(request_body): Observable<any> { 
    return this.httpClient.post<any>(`${serverURL}/SCGTs`,request_body);
  }

}
