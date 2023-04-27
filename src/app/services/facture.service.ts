import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../models/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
 // private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // URL de l'API
 private apiUrl = 'http://localhost:8081/factures'

  constructor(private http: HttpClient) { } // Injection du service HttpClient

  getFactures(): Observable<Facture[]> { // Récupération des factures depuis l'API
    return this.http.get<Facture[]>(this.apiUrl); // Utilisation de la méthode HTTP GET pour récupérer les factures
  }
}
