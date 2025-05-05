import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from 'src/app/navigation-buttons/navigation-buttons.component';
import { ZoomImageComponent } from 'src/app/zoom-image/zoom-image.component'; 
import { ZoomablePage } from '../zoom-image/zoomable-page';


@Component({
  selector: 'app-tab2',
  standalone: true,
  imports: [CommonModule, IonicModule, NavigationButtonsComponent, ZoomImageComponent],
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page extends ZoomablePage implements OnInit, OnDestroy {
  @ViewChild('comicGrid', { static: true }) override comicGridRef!: ElementRef<HTMLDivElement>;

  private audio!: HTMLAudioElement; // <- solución al TS2564

  ngOnInit() {
    this.audio = new Audio('assets/Audios/ambient-fantasy.mp3');
    this.audio.loop = true;
    this.audio.volume = 0.5;
  
    const startAudio = () => {
      this.audio.play().catch(err => {
        console.warn('No se pudo reproducir la música:', err);
      });
      document.removeEventListener('click', startAudio); // evitar múltiples llamadas
    };
  
    document.addEventListener('click', startAudio);
  }
  

  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  playCrashSound() {
    const crashAudio = new Audio('assets/Audios/Swish.mp3');
    crashAudio.play().catch(err => {
      console.warn('No se pudo reproducir el sonido de crash:', err);
    });
  }
}
