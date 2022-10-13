import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsHistoryComponent } from './commits-history.component';

describe('CommitsHistoryComponent', () => {
  let component: CommitsHistoryComponent;
  let fixture: ComponentFixture<CommitsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitsHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
