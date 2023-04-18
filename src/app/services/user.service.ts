import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { User } from '../shared/models/User';
import { environment } from 'src/environments/environment';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USER_KEY = 'User';
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  constructor(private http: HttpClient, private toastService: ToastService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public getCurrentUser(): User {
    return this.userSubject.value;
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(environment.USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastService.getToast(this.toastService.showLogin('success'));
        },
        error: (errorResponse) => {
          this.toastService.getToast(this.toastService.showLogin('failed'));
        }
      })
    );
  }

  register(userRegiser: IUserRegister) {
    return this.http.post<User>(environment.USER_REGISTER_URL, userRegiser).pipe(
      tap({
        next: (user) => {
          this.toastService.getToast(this.toastService.showRegister('success'));
        },
        error: (errorResponse) => {
          this.toastService.getToast(this.toastService.showRegister('failed'));
        }
      })
    );
  }

  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(this.USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
