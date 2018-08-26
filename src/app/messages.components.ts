import { Component } from '@angular/core'
import {ApiService} from './api.service'
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'messages',
  template: `<div *ngFor="let messages of apiService.messages">
  <mat-card>{{messages.msg}}</mat-card>
</div>`
})

export class MessagesComponent {
  constructor(private apiService:ApiService,private route:ActivatedRoute){}
  
  ngOnInit() {
    var id=this.route.snapshot.params.id 
    this.apiService.getMessages(id);
  }
}
