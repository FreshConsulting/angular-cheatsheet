# Scroll window to top on navigate

In your `src/app/app.component.ts`, trigger `window.scrollTo(0, 0)` on [NavigationEnd](https://angular.io/docs/ts/latest/api/router/index/NavigationEnd-class.html) event. Optionally, you can inject `window` object via service if your app runs outside of browser context.

```typescript
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

export class AppComponent implements OnInit {
  constructor(
    private router: Router
  ) {}

  this.router.events.subscribe((evt) => {
    if (evt instanceof NavigationEnd) {
      window.scrollTo(0, 0);
    }
  });
}
```

#### References

+ [Angular 2 Scroll to top on Route Change](http://stackoverflow.com/questions/39601026/angular-2-scroll-to-top-on-route-change)
