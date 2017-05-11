# Scroll window to top on navigate

In your `src/app/app.component.ts`, trigger `window.scrollTo(0, 0)` on [NavigationEnd](https://angular.io/docs/ts/latest/api/router/index/NavigationEnd-class.html) event. Optionally, you can inject `window` object via service if your app runs outside of browser context.

```typescript
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

export class AppComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe(() => {
      window.scrollTo(0, 0);
    });
}
```

## Scroll to particular element

Optionally, you can scroll to the top of particular element. This is useful for when your web page layout is setup so only the content scroll but not the document iself.

```typescript
this.router.events
  .filter(event => event instanceof NavigationEnd)
  .subscribe(() => {
    document.querySelector('.mat-sidenav-content').scrollTop = 0;
  });
```

#### References

+ [Angular 2 Scroll to top on Route Change](http://stackoverflow.com/questions/39601026/angular-2-scroll-to-top-on-route-change)
+ [Feature: Sidenav or Route Scroll Service] (https://github.com/angular/material2/issues/4280)
