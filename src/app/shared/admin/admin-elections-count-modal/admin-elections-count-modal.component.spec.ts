import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminElectionsCountModalComponent } from './admin-elections-count-modal.component';

describe('AdminVoteCountComponent', () => {
  let component: AdminElectionsCountModalComponent;
  let fixture: ComponentFixture<AdminElectionsCountModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminElectionsCountModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminElectionsCountModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
