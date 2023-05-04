export class Client {
    id: number;
    nom: string;
    prenom: string;
   /*fonction: string;
   role: string;
   portable: string;
   mail: string;
   societe: string;
   codeActivite: string;
   adresse: string;
   codePostal: string;
   ville: string;
   note: string;*/
    editMode: boolean;

  
    constructor(
      id: number,
      nom: string,
      prenom: string,
    /*fonction: string,
      role: string,
      portable: string,
      mail: string,
      societe: string,
      codeActivite: string,
      adresse: string,
      codePostal: string,
      ville: string,
      note: string,*/
      editMode: boolean// définir la propriété editMode dans la classe
       ) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
    /*  this.fonction = fonction;
      this.role = role;
      this.portable = portable;
      this.mail = mail;
      this.societe = societe;
      this.codeActivite = codeActivite;
      this.adresse = adresse;
      this.codePostal = codePostal;
      this.ville = ville;
      this.note = note;*/ 
      this.editMode = editMode; // assigner la valeur de editMode à l

      

    }
  }
  