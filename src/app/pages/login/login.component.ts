import { OnInit, Input, Component, Output, EventEmitter, RootRenderer } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LogIn } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,
    private logIn: LogIn 
  ) { }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    var tokenKey = "accessToken";
    this.submitEM.emit(this.form.value);
    
    this.logIn.post(this.form.value.username, this.form.value.password)
    .subscribe(
      (data) => {
        localStorage.setItem(tokenKey, data["access_token"]);
        this.router.navigate(['/table'])
      },
      err => {
        console.log(err)
      },
    );
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
  ngOnInit() {
  }

}
