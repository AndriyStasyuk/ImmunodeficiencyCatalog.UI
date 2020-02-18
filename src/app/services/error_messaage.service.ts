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
export class ErrorMessage {

    constructor(public snackBar: MatSnackBar) { }

    public flash_message(message: string) { 
        let actionButtonLabel = '';
        let action: boolean = true;
        let setAutoHide: boolean = true;
        let autoHide: number = 3000;
        let horizontalPosition: MatSnackBarHorizontalPosition = 'center';
        let verticalPosition: MatSnackBarVerticalPosition = 'top';
        
        let config = new MatSnackBarConfig();
        config.verticalPosition = verticalPosition;
        config.horizontalPosition = horizontalPosition;
        config.duration = setAutoHide ? autoHide : 0;
        this.snackBar.open(message, action ? actionButtonLabel : undefined, config);
    }

}
