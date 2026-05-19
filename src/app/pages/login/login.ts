import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Auth,GoogleAuthProvider,signInWithPopup} from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  imports:[RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {


constructor(private auth: Auth){}

async googleLogin(){

  try{

    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: 'select_account'
    });

    const result = await signInWithPopup(
      this.auth,
      provider
    );

    console.log(result.user);

    alert('Google Login Successful');

  }
  catch(error){

    console.log(error);

  }

}

showPassword = false;

togglePassword(){

  this.showPassword = !this.showPassword;

}
}
