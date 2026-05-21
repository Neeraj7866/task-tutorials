import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingDetails } from './recording-details';

describe('RecordingDetails', () => {
  let component: RecordingDetails;
  let fixture: ComponentFixture<RecordingDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordingDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(RecordingDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
