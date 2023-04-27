// app.component.ts

import { Component } from '@angular/core';

export interface Client {
  nom: string;
  prenom: string;
  fonction: string;
  dateNaissance: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  clients = [
    { nom: 'Dupont', prenom: 'Jean', fonction: 'Ingénieur', dateNaissance: '01/01/1980', email: 'jean.dupont@example.com' },
    { nom: 'Martin', prenom: 'Luc', fonction: 'Directeur', dateNaissance: '01/01/1970', email: 'luc.martin@example.com' }
];

}