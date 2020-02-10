import { Injectable } from "@angular/core";
import { from as fromPromise, Observable } from "rxjs";
import { Doctor } from "../models/doctor";
import { serverURL } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

/**
 * DcotorService
 */

@Injectable()
export class DoctorService {

    constructor(private httpClient: HttpClient) { }

    public get(): Observable<any> { 
        return this.httpClient.get<any>(`${serverURL}/patients`);
    }

    // public create(doctor: Doctor): Observable<number> {
    //     const urlRequest: Observable<string> = fromPromise(environment.then((env: string) => {
    //         return `${env['apiBaseUrl']}/doctors`;
    //     })
    //     );

    //     return urlRequest.pipe(switchMap((url: string) => this.httpClient.post<number>(url, doctor)));
    // }

    // public update(id: number, assignRule: Doctor): Observable<number> {
    //     const urlRequest: Observable<string> = fromPromise(environment.then((env: string) => {
    //         return `${env['apiBaseUrl']}/assignRules/${id}`;
    //     })
    //     );

    //     return urlRequest.pipe(switchMap((url: string) => this.httpClient.put<number>(url, assignRule)));
    // }

    // public remove(id: number): Observable<object> {
    //     const urlRequest: Observable<string> = fromPromise(environment.then((env: string) => {
    //         return `${env['apiBaseUrl']}/doctors/${id}`;
    //     })
    //     );

    //     return urlRequest.pipe(switchMap((url: string) => this.httpClient.delete<object>(url)));
    // }
}
