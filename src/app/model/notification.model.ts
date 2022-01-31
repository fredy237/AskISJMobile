import { formatDate } from "@angular/common";
import { Service } from "./service.model";
export class Notification {
  id: number;
  nom: string;
  date: string;
  service: Service;
  contenu: String;
 
  constructor(notification) {
    {
      this.nom = notification.nom || "";
      this.date = notification.date || "";
      this.service ={
          id:0,
          nom:""
      };
      this.contenu= notification.contenu;
    }
  }
 
}
