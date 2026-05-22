import { Component, OnInit } from '@angular/core';

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

export class App implements OnInit {

  constructor(

    private auth: Auth,

    private router: Router

  ){

    onAuthStateChanged(this.auth, (user)=>{

      if(user){

        if(
          this.router.url === '/' ||
          this.router.url === '/login'
        ){

          this.router.navigate(['/live']);
        }

      }else{

        if(this.router.url !== '/login'){

          this.router.navigate(['/login']);
        }
      }
    });
  }

  ngOnInit(): void {

    const darkMode =
    localStorage.getItem('darkMode');

    if(darkMode === 'enabled'){

      document.body.classList.add('dark-mode');

    }else{

      document.body.classList.remove('dark-mode');
    }
  }

}