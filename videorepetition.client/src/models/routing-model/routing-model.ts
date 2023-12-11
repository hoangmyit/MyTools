export type MainMenuDef = {
  title: string,
  items: MenuDef[],
};

export type MenuDef = {
  title: string,
  icon: string | JSX.Element | null,
  path: string | null,
  type: MenuTypeDef,
  selected: boolean,
  active: boolean,
  children?: MenuDef[],
};

export const enum MenuTypeDef {
  sub = 0,
  link = 1,
}
