import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iUser } from '../../model/iUser.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _httpClient: HttpClient) { }

  getProfile():Observable<iUser>{
    return this._httpClient.get<iUser>(`Users/currentUser`);
  }

  updateProfile(data: FormData){
    return this._httpClient.put(`Users`, data);
  }
}