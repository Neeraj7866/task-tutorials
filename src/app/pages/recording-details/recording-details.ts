import { Component, HostListener, OnInit } from '@angular/core';

import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

import { ActivatedRoute } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recording-details',

  standalone:true,

  imports:[
    BottomNav,
    FormsModule,
    CommonModule
  ],

  templateUrl: './recording-details.html',

  styleUrl: './recording-details.scss',
})

export class RecordingDetails implements OnInit {

  subject='';

  showSearch = false;

  searchText = '';

  constructor(private route:ActivatedRoute){

    this.subject =
    this.route.snapshot.params['subject'];
  }

  ngOnInit(): void {

    window.scrollTo(0,0);
  }

  toggleSearch(){

    this.showSearch = !this.showSearch;
  }

  @HostListener('document:click', ['$event'])

  closeSearch(event:any){

    if(
      !event.target.closest('.search-btn') &&
      !event.target.closest('.search-input')
    ){

      this.showSearch = false;
    }
  }

}