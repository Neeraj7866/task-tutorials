import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-recordings',

  standalone: true,

  imports: [
    BottomNav,
    RouterLink,
    CommonModule
  ],

  templateUrl: './recordings.html',

  styleUrl: './recordings.scss'
})

export class RecordingsComponent implements OnInit {

  showSearch = false;

  ngOnInit(): void {

    window.scrollTo(0,0);
  }

  toggleSearch(){

    this.showSearch = !this.showSearch;
  }

}