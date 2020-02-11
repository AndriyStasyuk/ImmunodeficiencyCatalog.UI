import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { serverURL } from "src/environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * LogIn
 */

@Injectable()
export class LogIn {

    constructor(private httpClient: HttpClient) { }

    public post(username: string, password: string): Observable<any> { 
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Origin','*');
        var request_body = {"Username": username, "Password": password};

        return this.httpClient.post<any>(`${serverURL}/Auth/token`, request_body, {headers:headers});
    }

}
