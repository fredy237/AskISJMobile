
import { Ask } from "./ask.model";
export class Moratoire extends Ask {
    amount:number
    date: string
    typeAsk:string
    
  constructor(moratoire) {
    super(moratoire);
    this.amount = moratoire.subject;
    this.date = moratoire.date  ;
    this.typeAsk = moratoire.typeAsk;
  }
}
