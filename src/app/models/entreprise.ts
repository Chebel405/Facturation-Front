// J'AI AJOUTE TOUT LES ATTRIBUTS DU BACK DE LA TABLE ENTREPRISE
//J AI retiré NOM et FONCTION qui sont dans la table UTILISATEUR

export class Entreprise {
    siret: number; // identifiant unique de l'entreprise
    siren: String; // numéro SIREN de l'entreprise
    ape: String
    numeroTva: String; // numéro de TVA intracommunautaire
   // nom: String; // nom de l'entreprise
    adresse: String; // adresse de l'entreprise
    codePostal: String; // code postal de l'adresse de l'entreprise
    commune: String; // ville de l'adresse de l'entreprise
    portable: String; // numéro de téléphone portable du contact
    raisonSocial: String;
    siege: String;
    rcs: String;
    cfe: String;
    codeActivite: String;
 //   fonction: String; // fonction du contact dans l'entreprise
    mail: String; // adresse email du contact
    site: String; // site web de l'entreprise
    note: String;
  
    constructor(
      siret: number,
      siren: String,
      ape: String,
      numeroTva: String,
      adresse: String,
      codePostal: String,
      commune: String,
      portable: String,
      raisonSocial: String,
      siege: String,
      rcs: String,
      cfe: String,
      codeActivite: String,
      mail: String,
      site: String,
      note: String
    ) {
      this.siret = siret;
      this.siren = siren;
      this.ape = ape;
      this.numeroTva = numeroTva;
      this.adresse = adresse;
      this.codePostal = codePostal;
      this.commune = commune;
      this.portable = portable;
      this.raisonSocial = raisonSocial;
      this.siege = siege;
      this.rcs = rcs;
      this.cfe = cfe;
      this.codeActivite = codeActivite;
      this.mail = mail;
      this.site = site;
      this.note = note;
    }
  }
  