import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];
  totalBalance: number;


  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.clientService.getClients().subscribe(
      (clients: Client[]) => {
        this.clients = clients;
        this.calToatlBalance();
        console.log(clients);
      });
  }

  calToatlBalance() {
    let total = 0;
    for (let index = 0; index < this.clients.length; index++) {
          total += this.clients[index].balance;
    }
    this.totalBalance = total;
  }

}
