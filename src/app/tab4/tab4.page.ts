import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from 'src/app/navigation-buttons/navigation-buttons.component'
import { ZoomablePage } from '../zoom-image/zoomable-page';
import { ZoomImageComponent } from '../zoom-image/zoom-image.component';

@Component({
  selector: 'app-tab4',
  standalone: true,
  imports: [CommonModule, IonicModule, NavigationButtonsComponent, ZoomImageComponent],
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page extends ZoomablePage {
  @ViewChild('comicGrid', { static: true }) override comicGridRef!: ElementRef<HTMLDivElement>;
}