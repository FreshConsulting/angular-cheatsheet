# *ngFor and *ngIf at the same time

```html
<ng-container *ngFor="let member of members">
  <div *ngIf="member.type === 'premium'">
    Only outputs when ngIf matches
  </div>
</ng-container>
```

```html
<div *ngFor="let member of members">
  <ng-container *ngIf="member.type === 'premium'">
    Still outputs an empty div even if ngIf does not match
  </ng-container>
</div>
```
