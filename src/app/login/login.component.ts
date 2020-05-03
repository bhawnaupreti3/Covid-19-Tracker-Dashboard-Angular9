import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IAdmin } from '../core/Model/Admin';
import { LoginService } from '../core/Service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginService,
    private toastrService: ToastrService ) {

/**
* Login form initialized with default values.
*/
this.loginForm = this.fb.group({
username: ['', Validators.required],
password: ['', Validators.required]
});
}

/**
* This method returns the error messages.
*/
getErrorMessage() {
return this.loginForm.get('username').hasError('required') ? 'You must enter a value' :
this.loginForm.get('password').hasError('required') ? 'You must enter a value' :
  '';
}

/** Clears the local storage initially */
ngOnInit() {
if (localStorage.getItem('TOKEN')) {
localStorage.clear();
}
}

/**
* Login the user and redirect to dashboard when valid.
* @param myform : IUser
*/
login(myform: IAdmin) {
if (this.loginService.validateUser(myform)) {
localStorage.setItem('TOKEN', 'token');
localStorage.setItem('username', myform.username);
this.route.navigate(['/dashboard']);
this.toastrService.success('Logged in successfully!', 'User Management Portal');
} else {
this.toastrService.warning('Please enter valid credentials!', 'User Management Portal');
}

}

/**
* resets the login form.
*/
resetForm() {
this.loginForm.reset();
}

}
