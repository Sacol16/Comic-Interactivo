import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from 'src/app/navigation-buttons/navigation-buttons.component'
import { ZoomImageComponent } from 'src/app/zoom-image/zoom-image.component';
import { ZoomablePage } from '../zoom-image/zoomable-page';
@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [CommonModule, IonicModule, NavigationButtonsComponent, ZoomImageComponent],
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page extends ZoomablePage{

}
