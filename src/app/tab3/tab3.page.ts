import { Component, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('comicGrid', { static: true }) override comicGridRef!: ElementRef<HTMLDivElement>;

  playCrashSound() {
    const crashAudio = new Audio('assets/Audios/box-crash.mp3');
    crashAudio.play().catch(err => {
      console.warn('No se pudo reproducir el sonido de crash:', err);
    });
  }
}
