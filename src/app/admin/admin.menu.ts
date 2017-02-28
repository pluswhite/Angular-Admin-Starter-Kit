export const ADMIN_MENU = [
  {
    path: 'admin',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'users',
        data: {
          menu: {
            title: 'Users',
            icon: 'ion-person-stalker',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: 'user-list',
            data: {
              menu: {
                title: 'User List'
              }
            }
          },
          // {
          //   path: ['/site/register'],
          //   data: {
          //     menu: {
          //       title: 'Register'
          //     }
          //   }
          // }
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'Form Elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'Form Inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'Form Layouts',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/site/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/site/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
      },
    ]
  }
];
