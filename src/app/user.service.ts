import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
   public URL:string ="";

  constructor(private http: HttpClient) {}
   
    getUserDetails(username) {
      return this.http.get<any>("https://api.github.com/users/"+ username);

  }

}
