import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVoteCountComponent } from './admin-vote-count.component';

describe('AdminVoteCountComponent', () => {
  let component: AdminVoteCountComponent;
  let fixture: ComponentFixture<AdminVoteCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVoteCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVoteCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
