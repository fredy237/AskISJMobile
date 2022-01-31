
import { Ask } from "./ask.model";
export class Absence extends Ask {
 
  motif: string;
  dateAbsence: string;
  justifiee:boolean;
  type: string;

  constructor(request) {
    {
      super(request);
      this.motif = request.motif || "";
      this.type = request.type || "";
      this.dateAbsence = "";
      this.justifiee = false
    }
  }
}
