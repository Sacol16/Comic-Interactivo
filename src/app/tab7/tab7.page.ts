import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from 'src/app/navigation-buttons/navigation-buttons.component'
import { ZoomablePage } from '../zoom-image/zoomable-page';
import { ZoomImageComponent } from '../zoom-image/zoom-image.component';

@Component({
  selector: 'app-tab5',
  standalone: true,
  imports: [CommonModule, IonicModule, NavigationButtonsComponent, ZoomImageComponent],
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page extends ZoomablePage implements OnInit, OnDestroy {
  @ViewChild('comicGrid', { static: true }) override comicGridRef!: ElementRef<HTMLDivElement>;
  private currentEffectAudio: HTMLAudioElement | null = null;

  private audio!: HTMLAudioElement; // <- solución al TS2564

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

playSound(audioFile: string) {
  // Si hay un audio anterior, detenerlo
  if (this.currentEffectAudio) {
    this.currentEffectAudio.pause();
    this.currentEffectAudio.currentTime = 0;
  }

  const audio = new Audio(`assets/Audios/${audioFile}`);
  audio.play().catch(err => {
    console.warn(`No se pudo reproducir el sonido ${audioFile}:`, err);
  });

  this.currentEffectAudio = audio;
}
override closeZoom() {
  super.closeZoom(); // Ejecuta lo de ZoomablePage

  if (this.currentEffectAudio) {
    this.currentEffectAudio.pause();
    this.currentEffectAudio.currentTime = 0;
    this.currentEffectAudio = null;
  }
}

}