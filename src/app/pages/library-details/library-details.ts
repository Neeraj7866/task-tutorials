import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-library-details',

  standalone:true,

  imports:[BottomNav],

  templateUrl: './library-details.html',

  styleUrl: './library-details.scss',
})

export class LibraryDetails {

  subject='';

  constructor(private route:ActivatedRoute){

    this.subject =
    this.route.snapshot.params['subject'];
  }

}