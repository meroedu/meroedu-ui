import {environment} from '../../../environments/environment';

export const CoreConstant = {

  API_ENDPOINT: environment.apiUrl,
  API_SECURED_ENDPOINT: environment.apiUrl + '/rest',

  APP_ROUTES: {
    DASHBOARD: '/console',

    COURSE: '/console/courses',
    COURSE_DETAILS: '/console/courses/detail',
    COURSE_CREATE: '/console/courses/create',
  }
};
