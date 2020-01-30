/**
 * Not White Space Validator directive
 */

import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { take } from 'rxjs/operators'; 
import { share } from 'rxjs/operators';

@Directive({
  selector: '[appNotWhiteSpace]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: NotWhiteSpaceValidatorDirective, multi: true}]
})
export class NotWhiteSpaceValidatorDirective implements AsyncValidator {
  public validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return c.valueChanges  
    .pipe(
      debounceTime(400),
      take(1),
      map((value: string) => {
        return value && value.match(/^\s+$/g)
          ? { appNotWhiteSpace: true }
          : null;
      }),
      share()
    )
      
  }
}
