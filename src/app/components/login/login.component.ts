import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private dataService: DataService,
    private router: Router,
  ) { }

  onSubmit() {
    this.dataService.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data:any) {
    this.dataService.handle(data.access_token);
    if (data.user.role_id == 1) {
      this.router.navigateByUrl('/author');
    } else {
      this.router.navigateByUrl('/books');
    }
  }

  handleError(error:any) {
    this.error = error.error.error;
  }
  ngOnInit() {
  }

}
