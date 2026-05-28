import { Component, OnInit } from '@angular/core';

import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SidebarComponent }from '../../shared/components/sidebar/sidebar';

@Component({
  selector: 'app-library',

  standalone:true,

  imports:[
    BottomNav,
    RouterLink,
    FormsModule,SidebarComponent,
    CommonModule,RouterModule
  ],

  templateUrl: './library.html',

  styleUrl: './library.scss',
})

export class Library implements OnInit {
  constructor(private router:Router){}

  
  sidebarOpen = false;

toggleSidebar(){

  this.sidebarOpen =
  !this.sidebarOpen;
}
  
touchStartX = 0;

touchEndX = 0;

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

    this.router.navigate(['/recordings']);
  }

  /* LEFT SWIPE */

  else if(swipeDistance < -80){

    this.router.navigate(['/profile']);
  }
}
  searchText = '';

  notes = [

    {
      title:'Expansions',
      notes:'12 Notes',
      time:'2 days ago',
      progress:72,
      badge:'NEW',
      route:'/library-details/expansions'
    },

    {
      title:'Rational Numbers',
      notes:'8 Notes',
      time:'1 week ago',
      progress:48,
      badge:'TOP',
      route:'/library-details/rational-numbers'
    },

    {
      title:'Factorisation',
      notes:'15 Notes',
      time:'Yesterday',
      progress:90,
      badge:'HOT',
      route:'/library-details/factorisation'
    },

    {
      title:'Simple Algebra',
      notes:'10 Notes',
      time:'5 days ago',
      progress:64,
      badge:'LIVE',
      route:'/library-details/simple-algebra'
    }

  ];

  get filteredNotes(){

    return this.notes.filter(note =>

      note.title
      .toLowerCase()
      .includes(this.searchText.toLowerCase())
    );
  }

  ngOnInit(): void {

    window.scrollTo(0,0);
  }

}