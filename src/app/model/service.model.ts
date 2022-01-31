import { formatDate } from "@angular/common";
export class Service {
  id: number;
  nom: string;
 
  constructor(service) {
    {
      this.nom = service.nom || "";
  
    }
  }
 
}
