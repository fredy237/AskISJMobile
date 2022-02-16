import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Ask } from 'src/app/model/ask.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AskService {
   
   dataC: Observable<any[]>;
   d: any;
  private baseUrl = 'https://wkt6pccj9d.execute-api.us-east-1.amazonaws.com/dev';
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
  getAllAsks() {
    const reqHeader = new HttpHeaders({'Content-Type': 'application/json',  'No-Auth': 'True',observe: 'body', responseType: 'json'  });

    console.log('test')
     return this.httpClient.get( `${this.baseUrl}/api/asks`,)
  }


   

   addAsk(request): Observable<HttpEvent<any>> {

    console.log(request)
    const req = new HttpRequest('POST', `${this.baseUrl}/api/asks`, request, {
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
