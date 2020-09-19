import {Injectable} from '@angular/core';
import {Course, CourseFilterItem} from './course';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Course[] = [
    {
      id: '1',
      title: 'Graphic Design Work Lorem Lipsd UI Lorem Lipsonasdfad',
      image: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      author: 'meroedu',
      type: 'Course Type 1',
      description: 'Graphic Design Work Lorem Lipson UI Lorem Lipson UI\n' +
        'Lorem Lipson Graphic Design Work Lorem Lipson UInd\n' +
        'Lorem Lipson UI Lorem Lipson\n',
      duration: 45,
      subCourse: [
        {
          title: 'Introduction to HTML',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
          duration: 30
        },
        {
          title: 'Introduction to HTML',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
          duration: 30
        },
        {
          title: 'Introduction to HTML',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
          duration: 30
        },
        {
          title: 'Introduction to HTML',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
          duration: 30
        }
      ]
    },
    {
      id: '2',
      title: 'Graphic Design Work Lorem Lipsd UI Lorem Lipsonasdfad',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      author: 'meroedu',
      type: 'Course Type 1',
      description: 'Graphic Design Work Lorem Lipson UI Lorem Lipson UI\n' +
        'Lorem Lipson Graphic Design Work Lorem Lipson UInd\n' +
        'Lorem Lipson UI Lorem Lipson\n',
      duration: 16,
      subCourse: [
        {
          title: 'Introduction to HTML',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
          duration: 30
        },
        {
          title: 'Introduction to HTML',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
          duration: 30
        },
        {
          title: 'Introduction to HTML',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
          duration: 30
        },
        {
          title: 'Introduction to HTML',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever.',
          duration: 30
        }
      ]
    },
  ];

  constructor() {
  }

  getAllCourses(): Observable<Course[]> {
    return of([...this.courses, ...this.courses, ...this.courses, ...this.courses]);
  }

  getCourseById(id: string): Observable<Course> {
    const course = this.courses.find(value => value.id === id);
    return of(course);
  }

  getAllCoursesByFilterItem(courseFilterItem: CourseFilterItem): Observable<Course[]> {
    return undefined;
  }

}
