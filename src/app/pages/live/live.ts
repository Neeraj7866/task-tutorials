import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-live',

  standalone:true,

  imports:[
    BottomNav,
    CommonModule
  ],

  templateUrl: './live.html',

  styleUrl: './live.scss',
})

export class Live implements OnInit {

  constructor(private router:Router){}

  /* SWIPE */

  touchStartX = 0;

  touchEndX = 0;

  /* UPCOMING CLASSES */

  upcomingClasses = [

    {
      time:'18:00',
      teacher:'Shakshi Sharma',
      topic:'GENETICS',
      lessons:'3 / 8 LESSONS',
      progress:60,
      image:'https://i.pravatar.cc/120?img=12'
    },

    {
      time:'20:00',
      teacher:'Aryan Sir',
      topic:'ALGEBRA',
      lessons:'5 / 10 LESSONS',
      progress:45,
      image:'https://i.pravatar.cc/120?img=14'
    },

    {
      time:'17:00',
      teacher:'Ravi Sharma',
      topic:'PHYSICS',
      lessons:'2 / 6 LESSONS',
      progress:30,
      image:'https://i.pravatar.cc/120?img=18'
    },

    {
      time:'19:00',
      teacher:'Megha Ma’am',
      topic:'CHEMISTRY',
      lessons:'7 / 9 LESSONS',
      progress:78,
      image:'https://i.pravatar.cc/120?img=24'
    }

  ];

  /* SWIPE METHODS */

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

      this.router.navigate(['/profile']);
    }

    /* LEFT SWIPE */

    else if(swipeDistance < -80){

      this.router.navigate(['/recordings']);
    }
  }

  /* SORT NEAREST */

  sortNearest(){

    const currentHour =
    new Date().getHours();

    this.upcomingClasses.sort((a:any,b:any)=>{

      const aHour =
      parseInt(a.time);

      const bHour =
      parseInt(b.time);

      return (

        Math.abs(aHour - currentHour)

        -

        Math.abs(bHour - currentHour)
      );
    });
  }

  ngOnInit(): void {

    window.scrollTo(0,0);
  }
}