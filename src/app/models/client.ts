export class Client {
    name: string;
    username: string;
    fonction: string;
    email: string;
    website: string;
  
    constructor(nom: string, prenom: string, fonction: string, email:string, website:string ) {
      this.name = nom;
      this.username = prenom;
      this.fonction = fonction;
      this.email= email;
      this.website= website;
    }
  }
  