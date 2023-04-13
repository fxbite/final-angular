import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';
import { PasswordsMatchValidator } from 'src/app/shared/validators/password_match_validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  submitted = false;
  user: any;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private ar: ActivatedRoute,
    private router: Router,
    private ts: ToastService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        name: this.fb.control('', [
          Validators.required
        ]),
        email: this.fb.control('', [
          Validators.required,
          Validators.email
        ]),
        password: this.fb.control('', [
          Validators.required
        ]),
        confirmPassword: this.fb.control('', [
          Validators.required
        ]),
        address: this.fb.control('', [
          Validators.required
        ])
      },
      {
        validator: PasswordsMatchValidator(
          'password',
          'confirmPassword'
        )
      }
    );
  }

  register() {
    this.isSubmitted = true;
    this.submitted = true; //addition
    if (this.registerForm.invalid) return;
    console.log(this.registerForm.value);
    this.ts.subject$.next('register');
    this.router.navigate(['/login']);
  }
}
