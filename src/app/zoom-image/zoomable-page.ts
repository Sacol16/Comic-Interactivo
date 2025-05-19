import { ElementRef } from '@angular/core';

export class ZoomablePage {
  zoomedImgSrc: string | null = null;
  overlayElement: HTMLElement | null = null;
  comicGridRef!: ElementRef<HTMLDivElement>; // Ref de la grid para aplicar el blur

  // Activar/desactivar el zoom
  toggleImageSize(event: Event) {
    const img = event.target as HTMLImageElement;
    this.zoomedImgSrc = img.src;

    // Crear el overlay
    this.overlayElement = document.createElement('div');
    this.overlayElement.className = 'zoom-overlay';
    this.overlayElement.addEventListener('click', this.closeZoom);

    // Crear la imagen ampliada
    const zoomedImage = document.createElement('img');
    zoomedImage.className = 'zoomed-image';
    zoomedImage.src = this.zoomedImgSrc;

    this.overlayElement.appendChild(zoomedImage);

    // Agregar overlay al body
    document.body.appendChild(this.overlayElement);

    // Aplicar el blur al fondo (comic-grid)
    if (this.comicGridRef?.nativeElement) {
      this.comicGridRef.nativeElement.classList.add('blur');
    }
  }

closeZoom() {
  this.zoomedImgSrc = '';

  if (this.overlayElement) {
    document.body.removeChild(this.overlayElement);
    this.overlayElement = null;
  }

  if (this.comicGridRef?.nativeElement) {
    this.comicGridRef.nativeElement.classList.remove('blur');
  }

  // Este método se sobrescribirá en Tab2Page para detener el audio
}

}
