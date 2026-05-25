import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';

import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

import { ChangeDetectorRef } from '@angular/core';

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

  constructor(

    private router:Router,

    private http:HttpClient,

    private cdr:ChangeDetectorRef

  ){}

  /* SWIPE */

  touchStartX = 0;

  touchEndX = 0;

  /* UPCOMING CLASSES */

  upcomingClasses:any[] = [];

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

  /* REAL TIME LEFT */

  getTimeLeft(classTime:string){

    const now = new Date();

    const currentMinutes =

    now.getHours() * 60

    +

    now.getMinutes();

    const parts =
    classTime.split(':');

    const classMinutes =

    parseInt(parts[0]) * 60

    +

    parseInt(parts[1]);

    const diff =
    classMinutes - currentMinutes;

    /* CLASS STARTED */

    if(diff <= 0){

      return 'Live Now';
    }

    /* LESS THAN 1 HOUR */

    if(diff < 60){

      return `Starts In ${diff} mins`;
    }

    /* HOURS */

    const hours =
    Math.floor(diff / 60);

    const mins =
    diff % 60;

    return `Starts In ${hours}h ${mins}m`;
  }

  /* SORT NEAREST */

  sortNearest(){

    const now = new Date();

    const currentMinutes =

    now.getHours() * 60

    +

    now.getMinutes();

    this.upcomingClasses.sort((a,b)=>{

      const aParts =
      a.time.split(':');

      const bParts =
      b.time.split(':');

      const aMinutes =

      parseInt(aParts[0]) * 60

      +

      parseInt(aParts[1]);

      const bMinutes =

      parseInt(bParts[0]) * 60

      +

      parseInt(bParts[1]);

      return (

        Math.abs(aMinutes - currentMinutes)

        -

        Math.abs(bMinutes - currentMinutes)
      );
    });
  }

  ngOnInit(): void {

    this.http.get<any[]>(
      'http://localhost:3000/classes'
    )
    .subscribe({

      next:(data)=>{

        console.log(data);

        this.upcomingClasses = [...data];

        this.cdr.detectChanges();
      },

      error:(err)=>{

        console.log(err);
      }

    });

    window.scrollTo(0,0);
  }
}