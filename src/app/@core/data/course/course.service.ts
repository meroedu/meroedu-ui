import {Injectable} from '@angular/core';
import {Course, CourseFilterItem, CourseLesson} from './course';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseLessons: CourseLesson[] = [
    {
      id: '1',
      title: 'Introduction',
      content: [
        {
          id: '1',
          title: 'Introduction to HTML',
          description: 'Lorem Ipsum is standard dummy text ever.',
          duration: 14
        },
        {
          id: '2',
          title: 'HTML Elements, and Attributes',
          description: 'Lorem Ipsum is standard dummy text ever.',
          duration: 14
        }
      ]
    },
    {
      id: '2',
      title: 'Styling and CSS',
      content: [
        {
          id: '3',
          title: 'Styling Elements, CSS, SCSS and all',
          description: 'Lorem Ipsum is standard dummy text ever.',
          duration: 20
        }
      ]
    },
    {
      id: '3',
      title: 'Graphics, Media and References',
      content: [
        {
          id: '4',
          title: 'Building Mock Design',
          description: 'Lorem Ipsum is standard dummy text ever.',
          duration: 22
        },
        {
          id: '5',
          title: 'Working with vector graphics',
          description: 'Lorem Ipsum is standard dummy text ever.',
          duration: 22
        }
      ]
    },
  ];

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
      subCourse: this.courseLessons
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
      subCourse: this.courseLessons
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
