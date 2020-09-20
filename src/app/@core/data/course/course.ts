export interface Course {
  id?: string;
  title: string;
  type: string;
  author: string;
  image: string;
  duration: number;
  description: string;
  subCourse?: CourseLesson[];
}

export interface CourseLesson {
  id?: string;
  title: string;
  description: string;
  duration?: number;
}

export type CourseFilterItem = 'All' | 'Assigned' | 'Published' | 'Archived' | 'Draft';

