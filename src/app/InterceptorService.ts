import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

    private _AUTH_HEADER = 'Authorization';
  
    constructor() {}
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request.clone({
        headers: request.headers.set(this._AUTH_HEADER, 'Bearer ' + localStorage.getItem('accessToken'))
      }));
    }
}