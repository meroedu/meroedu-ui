import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLessonContentComponent } from './add-edit-lesson-content.component';

describe('CreateUpdateLessonComponent', () => {
  let component: AddEditLessonContentComponent;
  let fixture: ComponentFixture<AddEditLessonContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLessonContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLessonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
