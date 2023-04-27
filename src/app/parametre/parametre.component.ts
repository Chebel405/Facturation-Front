import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {

  // Déclare une propriété pour stocker le formulaire
  parametreForm!: FormGroup;

  // Injecte le FormBuilder dans le constructeur
  constructor(private fb: FormBuilder) { }

  // Appelé une fois lorsque le composant est initialisé
  ngOnInit(): void {
    // Initialise le formulaire avec le FormBuilder
    this.parametreForm = this.fb.group({
      modeleFacture: ['', Validators.required], // Champs pour le modèle de facture
      modeleDevis: ['', Validators.required] // Champs pour le modèle de devis
    });
  }

  // Fonction appelée lorsque le formulaire est soumis
  onSubmit() {
    // Affiche les valeurs du formulaire dans la console
    console.log(this.parametreForm.value);
  }
}
