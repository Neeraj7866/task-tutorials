import {
  Component,
  OnInit
} from '@angular/core';

import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-recordings',

  standalone:true,

  imports:[
    BottomNav,
    RouterLink,
    CommonModule,
    FormsModule
  ],

  templateUrl:'./recordings.html',

  styleUrl:'./recordings.scss'
})

export class RecordingsComponent implements OnInit {

  showSearch = false;

  searchText = '';

  subjects = [

    {
      title:'Simple Algebra',
      videos:'12 Videos',
      time:'2 days ago',
      progress:72,
      badge:'NEW',
      route:'/recording-details/simple-algebra'
    },

    {
      title:'Linear Equations',
      videos:'14 Videos',
      time:'4 days ago',
      progress:48,
      badge:'HOT',
      route:'/recording-details/linear-equations'
    },

    {
      title:'Trigonometry',
      videos:'18 Videos',
      time:'1 day ago',
      progress:90,
      badge:'LIVE',
      route:'/recording-details/trigonometry'
    },

    {
      title:'Mensuration',
      videos:'11 Videos',
      time:'3 days ago',
      progress:60,
      badge:'TOP',
      route:'/recording-details/mensuration'
    },

    {
      title:'Probability',
      videos:'9 Videos',
      time:'Today',
      progress:35,
      badge:'NEW',
      route:'/recording-details/probability'
    }

  ];

  ngOnInit(): void {

    window.scrollTo(0,0);
  }

  toggleSearch(){

    this.showSearch = !this.showSearch;
  }

  get filteredSubjects(){

    return this.subjects.filter((subject)=>

      subject.title
      .toLowerCase()
      .includes(this.searchText.toLowerCase())
    );
  }

}