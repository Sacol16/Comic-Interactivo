import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from 'src/app/navigation-buttons/navigation-buttons.component';
import { ZoomImageComponent } from 'src/app/zoom-image/zoom-image.component'; // <-- Importa el componente
import { ZoomablePage } from '../zoom-image/zoomable-page';

@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [CommonModule, IonicModule, NavigationButtonsComponent, ZoomImageComponent],
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page extends ZoomablePage {
  // NO escribes toggleImageSize ni closeZoom aquí
}
