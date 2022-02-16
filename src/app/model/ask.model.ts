import { formatDate } from "@angular/common";
export class Ask  {
  askId: number;
  type: string;
  status: string;
  createdAt: string;
  createdBy: string;
  staff: string;
  document: string;

  //moratoire
  datePayment: string;
  amount:number

  //absence
  startDate: string;
  endDate: string; 
  reason: string;
  justified:boolean;
  absence_type: string;
  
  //revendication  
  course: string
  obtained: number
  claimed: number

  constructor(ask) {
    {
      this.askId = ask.askId ||"";
      this.type = ask.type || "";
      this.status = ask.status|| "";
      this.createdAt = formatDate(new Date(), "yyyy-MM-dd", "en");
      this.createdBy = ask.createdBy|| "";
      this.staff = ask.staff || "";


      this.datePayment = ask.datePayment || "";
      this.amount = ask.amount;

      
      this.startDate = ask.startDate;
      this.endDate = ask.endDate;
      this.reason = ask.reason || "";
      this.justified = false;
      this.absence_type = ask.absence_type || "";
   
      this.course = ask.course || "";
      this.obtained = ask.obtainedMark  ;
      this.claimed = ask.claimed;
      this.document = ask.document;
      
    }
  }

}
