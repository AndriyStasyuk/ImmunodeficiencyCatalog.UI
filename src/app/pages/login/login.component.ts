import { OnInit, Component,Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogIn } from '../../services/login.service';
import { ErrorMessage } from '../../services/error_messaage.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    private logIn: LogIn,
    private errorMessage: ErrorMessage,
  ) { }

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    code: new FormControl()
  });

  message_about_incorrect_data: string = "Введіть, будь ласка, валідні ім'я користувача і пароль!";
  message_about_required_fields: string = "Заповніть, будь ласка, усі необхідні поля!";
  message_about_incorrect_code: string = "Не валідний код для авторизації!"
  show: boolean = false;
  clicked: boolean = false;
  disabled: boolean = false;

  submit() {
    if (this.form.valid) {
      this.disabled = true;
      this.logIn.put(this.form.value.username, this.form.value.password)
      .subscribe(
        () => {
          this.show = true;
         this.disabled = false;          
        },
        () => {
          this.errorMessage.flash_message(this.message_about_incorrect_data);
        this.disabled = false;
        },
      );
    }
    else {
      this.errorMessage.flash_message(this.message_about_required_fields);
    }
  }

  login() {
    var tokenKey = "accessToken";
    this.logIn.post(this.form.value.username, this.form.value.password, this.form.value.code)
    .subscribe(
      (data) => {
        localStorage.setItem(tokenKey, data["access_token"]);
        this.router.navigate(['/patients']);
        this.disabled = false;
      },
      () => {
        this.errorMessage.flash_message(this.message_about_incorrect_code)
        this.disabled = false;
      },
    );
  }

  ngOnInit() { }
}
