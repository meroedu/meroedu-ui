import {Component, OnInit} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {CourseContent, CourseLesson} from '../../../../@core/data/course/course';
import {FormGroup} from '@angular/forms';
import {CourseService} from '../../../../@core/data/course/course.service';
import {EmitDraggableItem} from '../../../../@core/data/generic.model';
import {DialogPromptComponent} from '../../../../@theme/components/dialog-prompt/dialog-prompt.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-build-lessons',
  templateUrl: './build-lessons.component.html',
  styleUrls: ['./build-lessons.component.scss']
})
export class BuildLessonsComponent implements OnInit {

  editLessonId: string;
  editCourseContent: CourseContent;
  resetLessonForm: boolean;
  courseLessons: CourseLesson[];

  constructor(private dialogService: NbDialogService, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getCourseById('1').subscribe(value => {
      this.courseLessons = value.subCourse;
    });
  }

  draggableItemOnEventTrigger(emitDraggableItem: EmitDraggableItem): void {
    // console.log('emit event trigger ', emitDraggableItem);
    if (emitDraggableItem.isEdit) {
      if (!emitDraggableItem.isSubItem) {

        if (emitDraggableItem.isNewItem) {
          this.createLesson(emitDraggableItem);
        } else {
          this.updateLesson(emitDraggableItem);
        }
      } else if (emitDraggableItem.isSubItem) {
        if (emitDraggableItem.isNewItem) {
          this.createLessonContent(emitDraggableItem);
        } else {
          this.updateLessonContent(emitDraggableItem);
        }
      }
    } else if (emitDraggableItem.isDelete) {
      if (!emitDraggableItem.isSubItem) {
        this.deleteLesson(emitDraggableItem);
      } else {
        this.deleteLessonContent(emitDraggableItem);
      }
    }
  }

  draggableItemOnOrderChange(emitDraggableItem: EmitDraggableItem): void {
    console.log('emit on order change ', emitDraggableItem);
  }

  openTitleEdit(currentValue): Observable<any> {
    return this.dialogService.open(DialogPromptComponent, {
      context: {
        title: 'Enter Lesson Title',
        value: currentValue
      },
    }).onClose;
  }

  createLesson(emitDraggableItem: EmitDraggableItem): void {
    console.log('Adding new Lesson,');
    // Call - Add New Lesson api here
    this.openTitleEdit(emitDraggableItem.item.title).subscribe(dialogInputValue => {
      // Call - Update Lesson api here
      const courseLesson: CourseLesson = {
        ...emitDraggableItem.item,
        id: this.courseLessons.length + 1,
        title: dialogInputValue
      };
      this.courseLessons.push(courseLesson);
    });
  }

  updateLesson(emitDraggableItem: EmitDraggableItem): void {
    console.log('Updating Lesson');
    this.openTitleEdit(emitDraggableItem.item.title).subscribe(dialogInputValue => {
      const index = this.courseLessons.findIndex(value => value.id === emitDraggableItem.itemId);
      // Call - Update Lesson api here
      this.courseLessons[index] = {...emitDraggableItem.item, title: dialogInputValue};
    });
  }

  createLessonContent(emitDraggableItem: EmitDraggableItem): void {
    // Call - Add New Lesson Content api here
    console.log('adding new Lesson content');
    const index = this.courseLessons.findIndex(value => value.id === emitDraggableItem.itemId);
    const courseContent: CourseContent = {
      ...emitDraggableItem.item,
      id: emitDraggableItem.item.id ? emitDraggableItem.item.id : this.courseLessons[index].content.length + 1
    };
    this.editLessonId = emitDraggableItem.itemId;
    this.editCourseContent = courseContent;
    this.resetLessonForm = false;
    this.courseLessons[index].content.push(courseContent);
  }

  updateLessonContent(emitDraggableItem: EmitDraggableItem): void {
    // Call - Update Lesson Content api here
    console.log('Updating Lesson Content ', emitDraggableItem.item);
    this.editLessonId = emitDraggableItem.itemId;
    this.editCourseContent = emitDraggableItem.item;
    this.resetLessonForm = false;
  }

  deleteLesson(emitDraggableItem: EmitDraggableItem): void {
    const index = this.courseLessons.findIndex(value => value.id === emitDraggableItem.itemId);
    this.courseLessons.splice(index, 1);
  }

  deleteLessonContent(emitDraggableItem: EmitDraggableItem): void {
    const index = this.courseLessons.findIndex(value => value.id === emitDraggableItem.itemId);
    const subItemIndex = this.courseLessons[index].content.findIndex(value => value.id === emitDraggableItem.item.id);
    this.courseLessons[index].content.splice(subItemIndex, 1);
  }

  createLessonContentOnSubmission(lessonContentForm: FormGroup): void {
    console.log(lessonContentForm.value);
    if (lessonContentForm.invalid) {
      return;
    }
    const ccFormValue: CourseContent = lessonContentForm.value;
    const courContentValue: CourseContent = {
      id: ccFormValue.id,
      title: ccFormValue.title,
      description: ccFormValue.description
    };
    const lessonIndex = this.courseLessons.findIndex(value => value.id === this.editLessonId);
    if (courContentValue.id) {
      console.log('API Update Lesson');
      const lessonContentIndex = this.courseLessons[lessonIndex].content.findIndex(value => value.id === courContentValue.id);
      this.courseLessons[lessonIndex].content[lessonContentIndex] = courContentValue;
    } else {
      console.log('API Create New Lesson');
    }
    this.resetEditContent();
  }

  private resetEditContent(): void {
    this.resetLessonForm = true;
    this.editLessonId = null;
    this.editCourseContent = null;
  }

}
