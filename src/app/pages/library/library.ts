import { Component } from '@angular/core';
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

export class Library {

  showSearch = false;

  searchText = '';

  toggleSearch(){

    this.showSearch = !this.showSearch;
  }

}