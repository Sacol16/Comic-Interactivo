import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  constructor(private router: Router) {}

  irATab2() {
    this.router.navigate(['/tabs/tab2']);
  }

  irATab10() {
    this.router.navigate(['/tabs/tab10']);
  }
}

