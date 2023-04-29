import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from '../models/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
 
 private apiUrl = 'http://localhost:8081/factures'

  constructor(private http: HttpClient) { } // Injection du service HttpClient

  getFactures(): Observable<Facture[]> { // Récupération des factures depuis l'API
    return this.http.get<Facture[]>(this.apiUrl); // Utilisation de la méthode HTTP GET pour récupérer les factures
  }

  addFacture(facture: Facture): Observable<Facture> {
    return this.http.post<Facture>(this.apiUrl, facture);
  }

  deleteFacture(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

}
