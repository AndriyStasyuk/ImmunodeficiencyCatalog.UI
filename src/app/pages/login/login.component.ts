import { OnInit, Input, Component, Output, EventEmitter, RootRenderer } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LogIn } from '../../services/login.service';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    private logIn: LogIn,
    public snackBar: MatSnackBar
  ) { }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  message: string = "Не вдалося увійти, введіть, будь ласка, валідні ім'я користувача і пароль" ;
  actionButtonLabel: string = '';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 3000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  submit() {
    var tokenKey = "accessToken";
    this.submitEM.emit(this.form.value);
    
    this.logIn.post(this.form.value.username, this.form.value.password)
    .subscribe(
      (data) => {
        localStorage.setItem(tokenKey, data["access_token"]);
        this.router.navigate(['/patients'])
      },
      err => {
        let config = new MatSnackBarConfig();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
      },
    );
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
  ngOnInit() {
  }

}
