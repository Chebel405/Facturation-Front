export class Client {
    id: string;
    nom: string;
    prenom: string;
    fonction: string;
    role: string;
    // portable: string;
    // mail: string;
    // societe: string;
    // codeActivite: string;
    // adresse: string;
    // codePostal: string;
    // ville: string;
    // note: string;
  
    constructor(
      id: string,
      nom: string,
      prenom: string,
      fonction: string,
      role: string,
      // portable:string,
      // mail: string,
      // societe:string,
      // codeActivite: string,
      // adresse:string,
      // codePostal: string,
      // ville:string,
      // note:string
       ) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.fonction=fonction ;
      this.role=role ;
      // this.portable =portable ;
      // this.mail = mail;
      // this.societe =societe ;
      // this.codeActivite=codeActivite ;
      // this.adresse=adresse ;
      // this.codePostal =codePostal ;
      // this.ville =ville ;
      // this.note =note ;

    }
  }
  