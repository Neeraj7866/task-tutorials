import { Component, OnInit } from '@angular/core';

import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

import { Auth, signOut } from '@angular/fire/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',

  standalone:true,

  imports:[BottomNav],

  templateUrl: './profile.html',

  styleUrl: './profile.scss',
})

export class Profile implements OnInit {

  constructor(

    private auth:Auth,

    private router:Router

  ){}

  isDarkMode = false;

 ngOnInit(): void {

  window.scrollTo(0,0);

  const darkMode =
  localStorage.getItem('darkMode');

  this.isDarkMode =
  darkMode === 'enabled';

  if(this.isDarkMode){

    document.body.classList.add('dark-mode');

  }else{

    document.body.classList.remove('dark-mode');
  }
}

  toggleDarkMode(){

    this.isDarkMode = !this.isDarkMode;

    if(this.isDarkMode){

      document.body.classList.add('dark-mode');

      localStorage.setItem(
        'darkMode',
        'enabled'
      );

    }else{

      document.body.classList.remove('dark-mode');

      localStorage.setItem(
        'darkMode',
        'disabled'
      );
    }
  }

async logout(){

  localStorage.setItem(
    'darkMode',
    'disabled'
  );

  document.body.classList.remove(
    'dark-mode'
  );

  this.isDarkMode = false;

  await signOut(this.auth);

  this.router.navigate(['/login']);
}
}