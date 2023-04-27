import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../models/entreprise';
import { EntrepriseService } from '../services/entreprise.service';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit {
  entreprises: Entreprise[] = [];

  constructor(private entrepriseService: EntrepriseService) { }

  ngOnInit() {
    this.getEntreprises(); // Appel de la méthode getEntreprises() lors de l'initialisation du composant
  }

  //J'AI CHANGE CETTE METHODE 

  // getEntreprises(): void {
  //   this.entrepriseService.getEntreprises().subscribe((entreprises: Entreprise[]) => {
  //   this.entreprises = entreprises;
  //     });
  // }

  getEntreprises(): void {
      this.entrepriseService.getEntreprises().subscribe(entreprises => {
      this.entreprises = entreprises;
        });
    }
}
