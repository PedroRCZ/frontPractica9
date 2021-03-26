import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entidad } from '../models/entidad';

@Injectable({
    providedIn: 'root'
})

export class EntidadServices{
    url = "https://backpract7.herokuapp.com/users/";
    

    constructor(private http: HttpClient){ }

    getEntidad(): Observable<any>{
        return this.http.get(this.url);
    }

    getEntidadId(id: number):Observable<any>{
        return this.http.get(this.url + id)
    }

    
}