import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-zoom-image',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <div *ngIf="zoomedImgSrc" class="zoom-overlay" (click)="closeZoom()">
      <img [src]="zoomedImgSrc" class="zoomed-image" />
    </div>
  `,
  styleUrls: ['./zoom-image.component.scss']
})
export class ZoomImageComponent {
  @Input() zoomedImgSrc: string | null = null;
  @Input() closeZoomCallback!: () => void;

  closeZoom() {
    if (this.closeZoomCallback) {
      this.closeZoomCallback();
    }
  }
}
