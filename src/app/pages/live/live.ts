import { Component, OnInit } from '@angular/core';

import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-live',

  standalone:true,

  imports:[BottomNav],

  templateUrl: './live.html',

  styleUrl: './live.scss',
})

export class Live implements OnInit {

  ngOnInit(): void {

    window.scrollTo(0,0);
  }

}