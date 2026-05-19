import { Component } from '@angular/core';

import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-recordings',
  standalone: true,
  imports: [BottomNav],
  templateUrl: './recordings.html',
  styleUrl: './recordings.scss'
})

export class RecordingsComponent {

}