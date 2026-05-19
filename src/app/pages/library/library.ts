import { Component } from '@angular/core';
import { BottomNav } from '../../shared/components/bottom-nav/bottom-nav';
@Component({
  selector: 'app-library',
  imports: [BottomNav],
  templateUrl: './library.html',
  styleUrl: './library.scss',
})
export class Library {}
