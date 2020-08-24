import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkrulesComponent } from './parkrules.component';

describe('ParkrulesComponent', () => {
  let component: ParkrulesComponent;
  let fixture: ComponentFixture<ParkrulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkrulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
