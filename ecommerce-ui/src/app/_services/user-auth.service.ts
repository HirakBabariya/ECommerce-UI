import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles :[]){
    localStorage.setItem('roles',JSON.stringify(roles));
  }
  
  public getRoles(){
    return JSON.parse(localStorage.getItem('roles') || '{}');
  }
  
  public setToken(token : any){
    localStorage.setItem('token',token);
  }
  
  public getToken():any{
    return localStorage.getItem('token');
  }

  public clear(){
    return localStorage.clear();
  }

  public isLoggedIn(){
    return this.getToken() && this.getRoles();
  }
}
