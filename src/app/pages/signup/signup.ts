import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import {

  Auth,

  createUserWithEmailAndPassword,

  GoogleAuthProvider,

  signInWithPopup

} from '@angular/fire/auth';

@Component({

  selector: 'app-signup',

  standalone:true,

  imports: [RouterLink, FormsModule],

  templateUrl: './signup.html',

  styleUrl: './signup.scss',

})

export class Signup {

  email:string = '';

  password:string = '';

  showPassword = false;

  constructor(

    private auth:Auth,

    private router:Router

  ){}

  togglePassword(){

    this.showPassword = !this.showPassword;

  }

  async signup(){

    if(

  !this.fullName ||

  !this.email ||

  !this.password ||

  !this.confirmPassword


){

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
if(this.password !== this.confirmPassword){

  alert('Passwords do not match');

  return;

}

    try{

      const userCredential =
      await createUserWithEmailAndPassword(

        this.auth,

        this.email,

        this.password

      );

      console.log(userCredential.user);


      this.router.navigate(['/live']);

    }
    catch(error){

      console.log(error);

      alert('Signup Failed');
      

    }

  }

  async googleSignup(){

    try{

      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({

        prompt:'select_account'

      });

      const result = await signInWithPopup(

        this.auth,

        provider

      );

      console.log(result.user);

      alert('Google Signup Successful');

      this.router.navigate(['/live']);

    }
    catch(error){

      console.log(error);

    }

  }
  confirmPassword:string = '';
  fullName:string = '';
}