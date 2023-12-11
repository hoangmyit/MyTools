import { HomeIcon } from '../../../common/icons/home-ico';
import { MenuListIcon } from '../../../common/icons/menu-list-icon';
import { VideoLoopIcon } from '../../../common/icons/video-loop-ico';
import { MainMenuDef, MenuTypeDef } from '../../../models/routing-model/routing-model';

export const MENUITEMS: MainMenuDef[] = [
  {
    title: 'Repetition',
    items: [
      {
        title: 'video',
        icon: <VideoLoopIcon className="side-menu__icon" />,
        type: MenuTypeDef.link,
        selected: false,
        active: false,
        path: `${import.meta.env.BASE_URL}repetition/video`,
      },
      {
        title: 'audio',
        icon: <VideoLoopIcon className="side-menu__icon" />,
        type: MenuTypeDef.link,
        selected: false,
        active: false,
        path: `${import.meta.env.BASE_URL}repetition/audio`,
      },
    ],
  },
];

const exp: MainMenuDef[] = [
  {
    title: 'Main',
    items: [
      {
        title: 'Dashboards',
        icon: <HomeIcon className="side-menu__icon" />,
        path: null,
        type: MenuTypeDef.sub,
        selected: false,
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}dashboard/dashboard1`,
            type: MenuTypeDef.link,
            active: false,
            selected: false,
            title: 'Dashboard-1',
            icon: null,
          },
        ],
      },
    ],
  },
  {
    title: 'MULTI LEVEL',
    items: [
      {
        title: 'Menu-levels',
        icon: <MenuListIcon className="side-menu__icon" />,
        type: MenuTypeDef.sub,
        selected: false,
        active: false,
        path: null,
        children: [
          {
            path: '#',
            title: 'Level-1',
            type: MenuTypeDef.link,
            active: false,
            selected: false,
            icon: null,
          },
          {
            title: 'Level-2',
            type: MenuTypeDef.sub,
            selected: false,
            active: false,
            icon: null,
            path: null,
            children: [
              {
                path: '#',
                title: 'Level-2.1',
                type: MenuTypeDef.link,
                active: false,
                selected: false,
                icon: null,
              },
              {
                path: '#',
                title: 'Level-2.2',
                type: MenuTypeDef.link,
                active: false,
                selected: false,
                icon: null,
              },
            ],
          },
        ],
      },
    ],
  },
];

console.log(exp);
