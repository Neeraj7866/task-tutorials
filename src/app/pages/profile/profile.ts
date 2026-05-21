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
  }

  toggleDarkMode(){

    this.isDarkMode = !this.isDarkMode;

    document.body.classList.toggle('dark-mode');
  }

  async logout(){

    await signOut(this.auth);

    this.router.navigate(['/login']);
  }

}