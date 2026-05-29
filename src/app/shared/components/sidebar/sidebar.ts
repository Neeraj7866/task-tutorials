import {Component,Input,Output,EventEmitter} from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

@Component({
  selector:'app-sidebar',

  standalone:true,

  imports:[
    CommonModule,
    RouterModule
  ],

  templateUrl:'./sidebar.html',

  styleUrl:'./sidebar.scss'
})

export class SidebarComponent{

  @Input() sidebarOpen = false;

  @Output()
  sidebarOpenChange =
  new EventEmitter<boolean>();

  closeSidebar(){

    this.sidebarOpenChange.emit(false);
  }
}