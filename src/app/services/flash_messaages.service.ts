import { Injectable } from "@angular/core";
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
  } from '@angular/material';
  
/**
 * ErrorMessage
 */

@Injectable()
export class FlasMessages {

    constructor(public snackBar: MatSnackBar) { }

    public error_message(message: string, autoHide=3000) { 
        let actionButtonLabel: string = '';
        let action: boolean = true;
        let setAutoHide: boolean = true;
        let horizontalPosition: MatSnackBarHorizontalPosition = 'center';
        let verticalPosition: MatSnackBarVerticalPosition = 'top';
        
        let config = new MatSnackBarConfig();
        config.verticalPosition = verticalPosition;
        config.horizontalPosition = horizontalPosition;
        config.duration = setAutoHide ? autoHide : 0;
        this.snackBar.open(message, action ? actionButtonLabel : undefined, config);
    }

}
