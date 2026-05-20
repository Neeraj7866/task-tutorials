import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Auth,GoogleAuthProvider,signInWithPopup} from '@angular/fire/auth';
import { Router } from '@angular/router';
import {signInWithEmailAndPassword} from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports:[RouterLink,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {


constructor(private auth: Auth,private router: Router){
  
}

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

    this.router.navigate(['/live']);

  }
  catch(error){

    console.log(error);

  }

}

email:string = '';

password:string = '';

async login(){

  if(!this.email || !this.password){

    alert('Please fill all fields');

    return;

  }

  if(!this.email.includes('@')){

    alert('Enter valid email');

    return;

  }

  if(this.password.length < 6){

    alert('Password must be at least 6 characters');

    return;

  }

  try{

    const userCredential =
    await signInWithEmailAndPassword(

      this.auth,

      this.email,

      this.password

    );

    console.log(userCredential.user);

    this.router.navigate(['/live']);

  }
  catch(error){

    console.log(error);

    alert('Invalid Email or Password');

  }

}

showPassword = false;

togglePassword(){

  this.showPassword = !this.showPassword;

}
}
