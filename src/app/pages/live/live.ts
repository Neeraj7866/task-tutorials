import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';

import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

import { ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent }from '../../shared/components/sidebar/sidebar';
@Component({
  selector: 'app-live',

  standalone:true,

  imports:[
    BottomNav,
    CommonModule,
    RouterModule,SidebarComponent
  ],

  templateUrl: './live.html',

  styleUrl: './live.scss',
})

export class Live implements OnInit {

  constructor(

    private http:HttpClient,

    private cdr:ChangeDetectorRef

  ){}

 
  /* UPCOMING CLASSES */

  upcomingClasses:any[] = [];

  sidebarOpen = false;

toggleSidebar(){

  this.sidebarOpen =
  !this.sidebarOpen;
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

  /* LIVE FOR 1 HOUR */

  if(diff <= 0 && diff >= -60){

    return 'Live Now';
  }

  /* CLASS ENDED */

  if(diff < -60){

    return 'Class Ended';
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
      'https://6a13fb396c7db8aac053a101.mockapi.io/classes'
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