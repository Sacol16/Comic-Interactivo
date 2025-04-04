import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from 'src/app/navigation-buttons/navigation-buttons.component'

@Component({
  selector: 'app-tab1',
  standalone: true,
  imports: [CommonModule, IonicModule, NavigationButtonsComponent],
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {}
