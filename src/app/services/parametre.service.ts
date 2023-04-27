import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parametre } from 'src/app/models/parametre';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {
  private apiUrl = 'http://localhost:3000/parametres'; // URL of the API

  constructor(private http: HttpClient) { }

  // Retrieve parametres from the API
  getParametres(): Observable<Parametre> {
    return this.http.get<Parametre>(this.apiUrl);
  }

  // Update parametres on the API
  updateParametres(parametres: Parametre): Observable<any> {
    return this.http.patch(this.apiUrl, parametres);
  }
}

// Export the Parametre interface to be used in other files
export { Parametre };
