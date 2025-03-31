import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ComicPageComponent {
  pagina: number = 1;
  totalPaginas: number = 5; // Cambia según el número total de páginas

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.pagina = +params['id']; // Convierte el parámetro a número
    });
  }

  avanzarPagina() {
    if (this.pagina < this.totalPaginas) {
      this.router.navigate(['/pagina', this.pagina + 1]);
    }
  }

  retrocederPagina() {
    if (this.pagina > 1) {
      this.router.navigate(['/pagina', this.pagina - 1]);
    }
  }
}
