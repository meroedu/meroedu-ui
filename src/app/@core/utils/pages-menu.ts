import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/console/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Courses',
    icon: 'browser-outline',
    link: '/console/courses'
  },
  {
    title: 'Learning Path',
    icon: 'shuffle-2-outline',
    link: '/console/learning-path',
  },
  {
    title: 'Events',
    icon: 'keypad-outline',
    children: [
      {
        title: 'General',
        link: '/console/events/general',
      },
      {
        title: 'Notice',
        link: '/console/events/notice',
      },
    ],
  },
  {
    title: 'SETTINGS',
    group: true,
  },
  {
    title: 'General',
    icon: 'settings-2-outline',
    link: '/console/general-settings',
  },
];
