import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client'; // Import du modèle Client
import { ClientService } from 'src/app/services/client.service'; // Import du service ClientService

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Client[] = []; // Déclaration de la variable clients qui est un tableau de clients

  constructor(private clientService: ClientService) { } // Injection du service ClientService dans le constructeur

  ngOnInit() {
    this.getClients(); // Appel de la méthode getClients() lors de l'initialisation du composant
    
  }

  getClients(): void {
    this.clientService.getClients().subscribe(clients => this.clients = clients);
    // Appel de la méthode getClients() du service ClientService qui retourne un observable de clients
    // On souscrit à l'observable pour récupérer les clients retournés et les stocker dans la variable clients
  }

}
export { Client }; // Export du modèle Client
