export class ZoomablePage {
    zoomedImgSrc: string | null = null;
  
    toggleImageSize(event: Event) {
      const img = event.target as HTMLImageElement;
      this.zoomedImgSrc = img.src;
  
      const comicGrid = document.querySelector('.comic-grid') as HTMLElement;
      if (comicGrid) {
        comicGrid.classList.add('blur');
      }
    }
  
    closeZoom = () => {
      this.zoomedImgSrc = null;
  
      const comicGrid = document.querySelector('.comic-grid') as HTMLElement;
      if (comicGrid) {
        comicGrid.classList.remove('blur');
      }
    };
  }
  