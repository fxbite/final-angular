import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = '';
  submitted = false;
  user: any;

  // @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private ar: ActivatedRoute,
    private router: Router,
    private ts: ToastService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    });

    // this.auth.currentUser.subscribe((data) => (this.user = data));
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.ts.subject$.next('login');
    // For call api login & Store token to localStorage
    // this.accountServices.login(this.loginForm.value).subscribe({
    //   next: (res: any) => {
    //     this.user = res.result;
    //     this.accountServices.storeToken(res.result.token);
    //     this.accountServices.storeIdUser(res.result.user.id);
    //   },
    //   complete: () => {
    //     message...
    //     const event = {
    //       name: 'logout',
    //       isLogout: false,
    //       user: this.user,
    //     };
    //     this.eventManager.broadcast(event);
    //     this.auth.changeUser(this.user);
    this.router.navigate(['/home']);
    //   },
    //   error: (err) => {
    //     this.messageService.add({
    //       key: 'error',
    //       severity: 'error',
    //       summary: 'Fail',
    //       detail: `Login Fail. ${err.error.message}`,
    //       life: 2000,
    //     });
    //   },
    // });
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    console.log(this.loginForm.value);

    // this.userService.login({email:this.fc.email.value,
    //    password: this.fc.password.value}).subscribe(() => {
    //      this.router.navigateByUrl(this.returnUrl);
    //    });
  }
}
