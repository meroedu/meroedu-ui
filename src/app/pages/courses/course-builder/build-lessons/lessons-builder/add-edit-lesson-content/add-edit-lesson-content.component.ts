import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CourseContent} from '../../../../../../@core/data/course/course';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit-lesson-content',
  templateUrl: './add-edit-lesson-content.component.html',
  styleUrls: ['./add-edit-lesson-content.component.scss']
})
export class AddEditLessonContentComponent implements OnInit, OnChanges {

  @Input() lessonContent: CourseContent;
  @Input() resetForm: boolean;
  @Output() formSubmit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  isSubmitted: boolean;
  lessonForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm(this.lessonContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.resetForm) {
      this.lessonForm.reset();
    } else {
      this.buildForm(this.lessonContent);
    }
  }

  buildForm(lessonContent: CourseContent): void {
    this.lessonForm = this.formBuilder.group({
      id: [lessonContent ? lessonContent.id : null],
      title: [lessonContent ? lessonContent.title : '', [Validators.required]],
      description: [lessonContent ? lessonContent.description : '', [Validators.required]]
    });
  }

  onFormSubmission(): void {
    this.isSubmitted = true;
    this.lessonForm.markAllAsTouched();
    this.formSubmit.emit(this.lessonForm);
  }

}
