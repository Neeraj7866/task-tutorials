import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-recordings',
  standalone: true,
  imports: [BottomNav,RouterLink],
  templateUrl: './recordings.html',
  styleUrl: './recordings.scss'
})

export class RecordingsComponent {

}