import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NavigationButtonsComponent } from 'src/app/navigation-buttons/navigation-buttons.component'

@Component({
  selector: 'app-tab4',
  standalone: true,
  imports: [CommonModule, IonicModule, NavigationButtonsComponent],
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  zoomedImgSrc: string | null = null;

  toggleImageSize(event: Event) {
    const img = event.target as HTMLImageElement;
    this.zoomedImgSrc = img.src;

    const comicGrid = document.querySelector('.comic-grid') as HTMLElement;
    if (comicGrid) {
      comicGrid.classList.add('blur');
    }
  }

  closeZoom() {
    this.zoomedImgSrc = null;

    const comicGrid = document.querySelector('.comic-grid') as HTMLElement;
    if (comicGrid) {
      comicGrid.classList.remove('blur');
    }
  }
}