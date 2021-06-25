import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  public error:any = [];

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  onSubmit() {
    this.dataService.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data:any) {
    this.dataService.handle(data.access_token);
    this.router.navigateByUrl('/books');
  }

  handleError(error: any) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
