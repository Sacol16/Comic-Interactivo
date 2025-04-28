import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from 'src/app/navigation-buttons/navigation-buttons.component'
import { ZoomablePage } from '../zoom-image/zoomable-page';
import { ZoomImageComponent } from '../zoom-image/zoom-image.component';

@Component({
  selector: 'app-tab5',
  standalone: true,
  imports: [CommonModule, IonicModule, NavigationButtonsComponent, ZoomImageComponent],
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page extends ZoomablePage {}
