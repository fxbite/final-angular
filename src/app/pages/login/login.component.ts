import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginPageComponent
  implements OnInit
{
  loginForm!: FormGroup;
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
    this.loginForm = this.fb.group({
      email: this.fb.control('', [
        Validators.required,
        Validators.email
      ]),
      password: this.fb.control('', [
        Validators.required
      ])
    });

  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.ts.subject$.next('login');
 
    this.router.navigate(['/home']);
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    console.log(this.loginForm.value);

  }
}
