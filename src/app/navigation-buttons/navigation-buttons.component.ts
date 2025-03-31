import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-buttons',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
<div class="footer-buttons">
  <div *ngIf="prevPage" class="nav-button prev" (click)="navigate(prevPage)"></div>
  <div *ngIf="nextPage" class="nav-button next" (click)="navigate(nextPage)"></div>
</div>
  `,
  styleUrls: ['./navigation-buttons.component.scss'],
})
export class NavigationButtonsComponent {
  @Input() prevPage?: string;
  @Input() nextPage?: string;

  constructor(private router: Router) {}

  navigate(page: string) {
    this.router.navigateByUrl(page);
  }
}
