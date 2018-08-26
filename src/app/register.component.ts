import { Component } from '@angular/core'
import { AuthService } from "src/app/auth.service";

@Component({
  selector: 'register',
  templateUrl:'register.component.html'
})

export class RegisterComponent {
    registerData={}
    constructor(private authService:AuthService){}
    post(){
        console.log(this.registerData)
        var a=this.authService.registerUser(this.registerData)
        console.log(a)
    }
 
}
