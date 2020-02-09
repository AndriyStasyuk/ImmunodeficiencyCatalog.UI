import { OnInit, Input, Component, Output, EventEmitter, RootRenderer } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    public router: Router
    ) { }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    var tokenKey = "accessToken";
    this.submitEM.emit(this.form.value);
    var request_body = {"Username": this.form.value.username, "Password": this.form.value.password};
    
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin','*');
    
    this.http.post<any>("http://195.22.112.40:80/api/Auth/token", request_body, {headers:headers})
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
