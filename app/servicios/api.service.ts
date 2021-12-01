import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string ="http://localhost:8080/"

  constructor(private httpCliente:HttpClient) {

   }
   login(){

   }
   addUsuario(nombre:string, correo:string, username:string, password:string){

    const peticion =   ` ${this.url} usuarios/registrar`;
    const usuario: any = {
      nombre,
      correo,
      username,
      password
    };
    const headers:HttpHeaders = new HttpHeaders({
      'Content-Type': 'aplication/json;charset="utf-8"'
    })
    return this.httpCliente.post(peticion, usuario,{headers})
                           .pipe(map((data:any)=>{
                              return data;
                           }));

  }
}
