import { Component } from '@angular/core';
import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';
import { Auth, signOut } from '@angular/fire/auth';

import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  imports: [BottomNav],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

  constructor(

  private auth:Auth,

  private router:Router

){}
  isDarkMode = false;

toggleDarkMode(){

  this.isDarkMode = !this.isDarkMode;

  if(this.isDarkMode){

    document.body.classList.add('dark-mode');

  }
  else{

    document.body.classList.remove('dark-mode');

  }

}
async logout(){

  await signOut(this.auth);

  this.router.navigate(['/login']);

}
}
