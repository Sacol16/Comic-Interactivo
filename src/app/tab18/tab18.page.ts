import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from 'src/app/navigation-buttons/navigation-buttons.component'
import { ZoomablePage } from '../zoom-image/zoomable-page';
import { ZoomImageComponent } from '../zoom-image/zoom-image.component';

@Component({
  selector: 'app-tab5',
  standalone: true,
  imports: [CommonModule, IonicModule, NavigationButtonsComponent, ZoomImageComponent],
  templateUrl: './tab18.page.html',
  styleUrls: ['./tab18.page.scss'],
})
export class Tab18Page extends ZoomablePage {
  @ViewChild('comicGrid', { static: true }) override comicGridRef!: ElementRef<HTMLDivElement>;
}