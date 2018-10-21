import { ClientService } from './../../../services/client.service';
import { Client } from './../../../models/Client';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  disableBalanceOnAdd:boolean = false;
  client: Client={
    firstname:'',
    lastname:'',
    email: '',
    phone:'',
    balance : 0
  };
  
  @ViewChild('addClient') addClientForm:NgForm;
  
  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  onAddClient() {
    if (this.addClientForm.valid) {
        this.client.balance = parseInt(this.addClientForm.value.balance);
        this.client.firstname = this.addClientForm.value.firstname;
        this.client.lastname = this.addClientForm.value.lastname;
        this.client.phone = this.addClientForm.value.phone;
        this.client.email = this.addClientForm.value.email;
        this.clientService.create(this.client).subscribe(
          (client: Client) => {
            this.addClientForm.reset();
        },
        (errors: HttpErrorResponse)=>{
          alert(errors.error);
        }
        );
                          
    }
  }

}
