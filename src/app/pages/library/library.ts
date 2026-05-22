import { Component, OnInit } from '@angular/core';

import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

import { RouterLink } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-library',

  standalone:true,

  imports:[
    BottomNav,
    RouterLink,
    FormsModule,
    CommonModule
  ],

  templateUrl: './library.html',

  styleUrl: './library.scss',
})

export class Library implements OnInit {

  showSearch = false;

  searchText = '';

  notes = [

    {
      title:'Expansions',
      notes:'12 Notes',
      time:'2 days ago',
      route:'/library-details/expansions'
    },

    {
      title:'Rational Numbers',
      notes:'8 Notes',
      time:'1 week ago',
      route:'/library-details/rational-numbers'
    },

    {
      title:'Factorisation',
      notes:'15 Notes',
      time:'Yesterday',
      route:'/library-details/factorisation'
    },

    {
      title:'Simple Algebra',
      notes:'10 Notes',
      time:'5 days ago',
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

  toggleSearch(){

    this.showSearch = !this.showSearch;
  }

}