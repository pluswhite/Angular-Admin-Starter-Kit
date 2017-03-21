export const ADMIN_MENU = [
  {
    path: 'admin',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'fa fa-dashboard',
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
            icon: 'fa fa-user',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'User List'
              }
            }
          }
        ]
      },
      {
        path: 'reports',
        data: {
          menu: {
            title: 'Reports',
            icon: 'fa fa-files-o',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'Total Report'
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
            icon: 'fa fa-file',
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
