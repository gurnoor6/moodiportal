import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  _url = 'https://api2.moodi.org/registrationdata/'; 
  constructor(private _http:HttpClient) { }

  register(userData){
  	return this._http.post<any>(this._url,userData);
  }

}
