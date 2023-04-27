export class Facture {
    name: string;
    zipcode: number;
    fonction: string;
    email: string;
    website: string;
  
    constructor(nom: string, zipcode: number, fonction: string, email:string, website:string ) {
      this.name = nom;
      this.zipcode = zipcode;
      this.fonction = fonction;
      this.email= email;
      this.website= website;
    }
  }
  


  
  