import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GuideTouristique } from './models/guide_touristique';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <main>
      <h1>Guides touristiques</h1>

      <input
        type="search"
        [(ngModel)]="recherche"
        placeholder="Rechercher un guide"
        aria-label="Rechercher un guide"
      />

      @for (guide of guidesFiltres; track guide.id) {
        <article>
          <h2>{{ guide.prenom }} {{ guide.nom }}</h2>
          <p>Région : {{ guide.region }}</p>
          <p>Spécialités : {{ guide.specialites }}</p>
          <button type="button" [disabled]="enChargement" (click)="afficherMessage()">
            Contacter
          </button>
        </article>
      } @empty {
        <p>Aucun résultat pour cette recherche.</p>
      }

      <p>{{ message }}</p>
    </main>
  `,
  styles: [`
    main { max-width: 900px; margin: 3rem auto; font-family: Arial, sans-serif; }
    h1 { color: #087f73; }
    input { padding: 0.5rem; width: 100%; max-width: 400px; margin-bottom: 1rem; }
  `]
})
export class App {
  enChargement = false;
  message = '';
  recherche = '';

  guides: GuideTouristique[] = [
    {
      id: 1, prenom: 'Aminata', nom: 'Diop', region: 'Dakar',
      langues: ['Français', 'Wolof'], specialites: 'Patrimoine historique', actif: true
    },
    {
      id: 2, prenom: 'Mamadou', nom: 'Sagna', region: 'Ziguinchor',
      langues: ['Français', 'Diola'], specialites: 'Écotourisme', actif: true
    },
    {
      id: 3, prenom: 'Fatou', nom: 'Ndiaye', region: 'Saint-Louis',
      langues: ['Français', 'Wolof'], specialites: 'Architecture coloniale', actif: true
    }
  ];

  get guidesFiltres(): GuideTouristique[] {
    const q = this.recherche.trim().toLocaleLowerCase('fr');
    return this.guides.filter(g =>
      `${g.prenom} ${g.nom} ${g.specialites}`
        .toLocaleLowerCase('fr')
        .includes(q)
    );
  }

  afficherMessage(): void {
    this.message = 'Fonction à compléter dans le TP.';
  }
}