import { Component } from '@angular/core'
import {ApiService} from './api.service'

@Component({
  selector: 'users',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private apiService:ApiService){}
  ngOnInit() {
    this.apiService.getMessages(12);
  }
}
