import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesBlockComponent } from './hobbies-block.component';

describe('HobbiesBlockComponent', () => {
  let component: HobbiesBlockComponent;
  let fixture: ComponentFixture<HobbiesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
