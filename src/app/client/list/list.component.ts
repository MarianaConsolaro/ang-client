import { Component, OnInit, inject } from '@angular/core';
import { UiFormComponent } from '../../ui-form/ui-form.component';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/client.interface';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    UiFormComponent,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export  default class ListComponent implements OnInit {
  private clientService = inject(ClientService);

  clients: Client[] = [];

  ngOnInit(): any {
    this.loadAll();
  }

  loadAll(){
    this.clientService.list()
      .subscribe(clients => {
        this.clients = clients;
      })
  }

  deleteClient(client: Client) {
    this.clientService.delete(client.id)
      .subscribe(() => {
        this.loadAll();
      });
  }
}