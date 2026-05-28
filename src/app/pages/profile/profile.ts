import { Component, OnInit } from '@angular/core';

import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

import { Auth, signOut } from '@angular/fire/auth';

import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SidebarComponent }from '../../shared/components/sidebar/sidebar';


@Component({
  selector: 'app-profile',

  standalone:true,

  imports:[BottomNav,RouterModule,SidebarComponent],

  templateUrl: './profile.html',

  styleUrl: './profile.scss',
})

export class Profile implements OnInit {
  
  touchStartX = 0;

touchEndX = 0;

  constructor(

    private auth:Auth,

    private router:Router

  ){}

  
  sidebarOpen = false;

toggleSidebar(){

  this.sidebarOpen =
  !this.sidebarOpen;
}
  

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

  onTouchStart(event:any){

  this.touchStartX =
  event.changedTouches[0].screenX;
}

onTouchEnd(event:any){

  this.touchEndX =
  event.changedTouches[0].screenX;

  this.handleSwipe();
}
handleSwipe(){

  const swipeDistance =
  this.touchEndX - this.touchStartX;

  /* RIGHT SWIPE */

  if(swipeDistance > 80){

    this.router.navigate(['/library']);
  }

  /* LEFT SWIPE */

  else if(swipeDistance < -80){

    this.router.navigate(['/live']);
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