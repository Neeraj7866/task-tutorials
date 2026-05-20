import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { Auth, onAuthStateChanged } from '@angular/fire/auth';

import { Router } from '@angular/router';

@Component({

  selector: 'app-root',

  standalone: true,

  imports: [RouterOutlet],

  templateUrl: './app.html',

  styleUrl: './app.scss'

})

export class App {

  constructor(

    private auth: Auth,

    private router: Router

  ){

    onAuthStateChanged(this.auth, (user)=>{

     if(user){

  if(this.router.url !== '/live'){

    this.router.navigate(['/live']);

  }

}
else{

  if(this.router.url !== '/login'){

    this.router.navigate(['/login']);

  }

}
    });

  }

}