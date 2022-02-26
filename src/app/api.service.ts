import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000/qualifications";
  constructor(private httpClient: HttpClient) { }

  public getQualificationService(){
    return this.httpClient.get(this.SERVER_URL);
  }
}


