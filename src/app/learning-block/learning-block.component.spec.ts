import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBlockComponent } from './learning-block.component';

describe('LearningBlockComponent', () => {
  let component: LearningBlockComponent;
  let fixture: ComponentFixture<LearningBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
