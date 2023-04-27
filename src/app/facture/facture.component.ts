import { Component, OnInit } from '@angular/core';
import { Facture } from '../models/facture'; // Import de la classe Facture du module "models"
import { FactureService } from '../services/facture.service'; // Import du service FactureService

@Component({
  selector: 'app-facture', // Sélecteur du composant
  templateUrl: './facture.component.html', // URL du template du composant
  styleUrls: ['./facture.component.css'] // URLs des fichiers de styles du composant
})
export class FactureComponent implements OnInit {
  factures: Facture[] = []; // Tableau de factures, initialisé à vide

  constructor(private factureService: FactureService) { } // Injection du service FactureService

  ngOnInit(): void {
    this.getFactures(); // Appel de la méthode getFactures() lors de l'initialisation du composant
  }

  getFactures(): void {
    this.factureService.getFactures() // Appel de la méthode getFactures() du service FactureService
      .subscribe(factures => this.factures = factures); // Souscription à l'observable renvoyé par la méthode, puis mise à jour du tableau de factures avec les données reçues
  }
}
