import { formatDate } from "@angular/common";
export class Ask  {
  id: number;
  matricule: string;
  service: string;
  date: string;
  statut: number;
  image: string;
  constructor(request) {
    {
      this.id = request.id || this.getRandomID();
      this.matricule = request.matricule || "";
      this.service = request.service || "";
      this.date = formatDate(new Date(), "yyyy-MM-dd", "en");
      this.statut = request.statut|| 0;
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
