import { Injectable, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Observable<Client[]>;

  constructor(private httpClient: HttpClient) {
    this.clients = this.httpClient.get<Client[]>('http://localhost:3050/api/clients');
   }

  getClients() {
    return this.clients;
  }

  create(client: Client) {
    return this.httpClient.post<Client>('http://localhost:3050/api/clients', client);
  }

}
