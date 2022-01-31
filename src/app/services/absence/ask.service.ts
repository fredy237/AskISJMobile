import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpEvent, HttpRequest } from "@angular/common/http";
import { Absence } from 'src/app/model/absence.model';
import { Ask } from 'src/app/model/ask.model';


@Injectable({
  providedIn: 'root'
})
export class AbsenceService {

  private baseUrl = 'http://localhost:8080';
  isTblLoading = true;
  dataChange: BehaviorSubject<Ask[]> = new BehaviorSubject<Ask[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Ask[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllRequests(): void {
    this.httpClient.get<Ask[]>(`${this.baseUrl}/request/listAll`).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
        console.log(data)
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + " " + error.message);
      }
    );
  }

   addAsk(request): Observable<HttpEvent<any>> {

    console.log(request)
    const req = new HttpRequest('POST', `${this.baseUrl}/request/save`, request, {
      reportProgress: true,
      responseType: 'json'
    });
    // la reponse a  été définie dans le backend
    return this.httpClient.request(req);
  }

  updateRequest(request : Ask): Observable<HttpEvent<any>>{

    const req = new HttpRequest('PUT', `${this.baseUrl}/request/edit`, request, {
      reportProgress: true,
      responseType: 'json'
    });
    // la reponse a  été définie dans le backend
    return this.httpClient.request(req);
  }
  
   /**
   * methode pour supprimer une compagnie du système
   * @param request
   */
    deleteRequest(request : Ask): Observable<HttpEvent<any>>{


      const req = new HttpRequest('DELETE', `${this.baseUrl}/request/delete`, request, {
        reportProgress: true,
        responseType: 'json'
      });
      // la reponse a  été définie dans le backend
      return this.httpClient.request(req);
    }
}
