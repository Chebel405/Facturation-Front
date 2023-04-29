import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from 'src/app/models/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {


 private apiURL = 'http://localhost:8081/entreprises' // J'ai juste ajouté '/entreprises' 
                                                      // (si tu vas sur la page EntrepriseController dans 
                                                      // le back @RequestMapping("/entreprises") c'est pour ca )

  constructor(private http: HttpClient) { }

  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.apiURL);
  }

  addEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.apiURL, entreprise);
  }

  deleteEntreprise(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url);
  }


}

