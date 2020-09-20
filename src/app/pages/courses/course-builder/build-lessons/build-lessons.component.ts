import {Component, OnInit, TemplateRef} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {NbDialogService} from '@nebular/theme';
import {CourseLesson} from '../../../../@core/data/course/course';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-build-lessons',
  templateUrl: './build-lessons.component.html',
  styleUrls: ['./build-lessons.component.scss']
})
export class BuildLessonsComponent implements OnInit {

  lessonForm: FormGroup;
  editLesson: CourseLesson;

  courseLessons: CourseLesson[] = [
    {
      id: '1',
      title: 'Introduction to HTML',
      description: 'Lorem Ipsum is standard dummy text ever.',
      duration: 14
    },
    {
      id: '2',
      title: 'HTML Elements, Attributes and Styles',
      description: 'Lorem Ipsum is standard dummy text ever.',
      duration: 20
    },
    {
      id: '3',
      title: 'HTML Forms, Graphics, Media and References',
      description: 'Lorem Ipsum is standard dummy text ever.',
      duration: 22
    },
  ];

  constructor(private dialogService: NbDialogService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.lessonForm = this.formBuilder.group({
      id: [null],
      title: ['', [Validators.required]],
      description: ['', Validators.required]
    });
  }

  confirmDelete(dialog: TemplateRef<any>): void {
    this.dialogService.open(dialog, {context: 'pass additional data to dialog', closeOnBackdropClick: true});
  }

  delete(dialogRef: any, index: any): void {
    this.courseLessons.splice(index, 1);
    dialogRef.close();
  }

  onEdit(currentLesson: CourseLesson): void {
    this.editLesson = currentLesson;
    this.lessonForm.patchValue(currentLesson);
  }

  lessonSubmission(): void {
    console.log(this.editLesson);
    if (this.lessonForm.invalid) {
      return;
    }
    const clFormValue: CourseLesson = this.lessonForm.value;
    const updatedLesson: CourseLesson = {
      id: clFormValue.id,
      title: clFormValue.title,
      description: clFormValue.description
    };
    if (clFormValue.id) {
      console.log('API Update Lesson');
    } else {
      console.log('API Create New Lesson');
    }
    const updatedLessonIndex = this.courseLessons.findIndex(value => value.id === updatedLesson.id);
    this.courseLessons[updatedLessonIndex] = updatedLesson;
    this.lessonForm.reset();
  }

  addNew(): void {
    this.courseLessons.push({
      id: this.courseLessons.length + 1 + '',
      title: 'New Lesson',
      description: 'Lorem Ipsum is standard dummy text ever.',
      duration: 12
    });
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.courseLessons, event.previousIndex, event.currentIndex);
  }
}
