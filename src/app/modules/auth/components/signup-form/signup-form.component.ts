import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { SignupServerAnswer } from "../../interfaces/SignupServerAnswer";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
	signUpForm: FormGroup;

 	constructor(
 		private authService: AuthService,
    private router: Router
 	) { }

	ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      nickName: new FormControl('', Validators.required),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      gender_orientation: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      date_of_birth_day: new FormControl('', Validators.required),
      date_of_birth_month: new FormControl('', Validators.required),
      date_of_birth_year: new FormControl('', Validators.required),
    }, {});
  }

	onSubmit() {
    if (this.signUpForm.invalid) {
      return console.log('Validate errors');
    }
		this.authService.signup({...this.signUpForm.value}).subscribe((res: SignupServerAnswer) => {
			if (!res.error) {
        this.router.navigate(['/auth/login']);
			} 
    });
	}
}


