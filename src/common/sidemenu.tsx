
export const MENUITEMS = [
  {
    menutitle: "Main",
    Items: [
      {
        title: "Dashboards",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}dashboard/dashboard1`,
            type: "link",
            active:false,
            selected:false,
            title: "Dashboard-1",
          },
          
        ],
      },
    ],
  },
  {
    menutitle: "MULTI LEVEL",
    Items: [
      {
        title: "Menu-levels",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: '#',
            title: "Level-1",
            type: "link",
            active:false,
            selected:false,
          },
          {
            title: "Level-2",
            type: "sub",
            selected:false,
            active:false,
            children: [
              {
                path: '#',
                title: "Level-2.1",
                type: "link",
                active:false,
                selected:false,
              },
              {
                path: '#',
                title: "Level-2.2",
                type: "link",
                active:false,
                selected:false,
              }
            ],
          },
        ],
      },
    ],
  }
];
