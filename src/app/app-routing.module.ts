import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { FactureComponent } from './facture/facture.component';
import { ParametreComponent } from './parametre/parametre.component';
import { EntrepriseComponent } from './entreprise/entreprise.component'; // Importer le composant Entreprise

const routes: Routes = [
  // La route pour afficher la liste des clients
  { path: 'clients', component: ClientComponent },
  // La route pour afficher la liste des factures
  { path: 'factures', component: FactureComponent },
  // La route pour afficher les paramètres
  { path: 'parametres', component: ParametreComponent },
  // La route pour afficher la liste des entreprises
  { path: 'entreprises', component: EntrepriseComponent },
  // Rediriger vers la liste des entreprises si l'utilisateur accède à la racine de l'application
  { path: '', redirectTo: '/entreprises', pathMatch: 'full' }
];


@NgModule({
  // Importer les routes définies
  imports: [RouterModule.forRoot(routes)],
  // Exporter le module de routage
  exports: [RouterModule]
})
export class AppRoutingModule { }
