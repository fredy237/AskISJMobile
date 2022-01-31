import { formatDate } from "@angular/common";
import { Ask } from "./ask.model";
export class Revendication extends Ask {
    subject: string
    obtainedMark: number
    wishedMark: number
    
  constructor(revendication) {
    super(revendication);
    this.subject = revendication.subject || "";
    this.obtainedMark = revendication.obtainedMark  ;
    this.wishedMark = revendication.wishedMark;
  }
}
