import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <main>
      <h1>Page introuvable</h1>
      <p>Cette adresse n'existe pas.</p>
      <a routerLink="/guides">Retour à la liste des guides</a>
    </main>
  `,
  styles: [`
    main { max-width: 900px; margin: 3rem auto; font-family: Arial, sans-serif; }
  `]
})
export class NotFoundComponent {}