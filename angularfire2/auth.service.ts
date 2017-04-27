import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  user;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if (!auth) {
        // Redirect non-logged in user back to home
        this.router.navigate(['']);
      }
      if (auth) {
        this.user = auth;
        this.isLoggedIn = true;
        if (this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
        } else {
          // Redirect logged in user here
          this.router.navigate(['dashboard']);
        }
      }
    });
  }

  login() {
    return this.af.auth.login();
  }

  logout(): void {
    this.isLoggedIn = false;
    this.af.auth.logout();
  }

  getUser() {
    return this.user;
  }
}
