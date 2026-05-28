import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicLeaderboard } from './academic-leaderboard';

describe('AcademicLeaderboard', () => {
  let component: AcademicLeaderboard;
  let fixture: ComponentFixture<AcademicLeaderboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicLeaderboard],
    }).compileComponents();

    fixture = TestBed.createComponent(AcademicLeaderboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
