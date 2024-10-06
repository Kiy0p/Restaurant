export interface menuItemObject {
  src: string;
  title: string;
  subtitle: string;
  vegan: boolean;
}

export const menuItemsSandwich: menuItemObject[] = [
  {
    src: "resources/menu/shish_taouk.jpg",
    title: "menu.shish",
    subtitle: "menu.shish_sub",
    vegan: false,
  },
  {
    src: "resources/menu/shish_merguez.jpg",
    title: "menu.merguez",
    subtitle: "menu.merguez_sub",
    vegan: false,
  },
  {
    src: "resources/menu/shish_gyros.jpg",
    title: "menu.gyros",
    subtitle: "menu.gyros_sub",
    vegan: false,
  },
  {
    src: "resources/menu/shish_falafel.jpg",
    title: "menu.falafel",
    subtitle: "menu.falafel_sub",
    vegan: true,
  },
  {
    src: "resources/menu/shish_souvlaki.jpg",
    title: "menu.souvlaki",
    subtitle: "menu.souvlaki_sub",
    vegan: false,
  },
  {
    src: "resources/menu/shish_mixte.jpg",
    title: "menu.mixte",
    subtitle: "menu.mixte_sub",
    vegan: false,
  },
];

export const menuItemsPlates: menuItemObject[] = [
  {
    src: "resources/menu/plate_chicken.jpg",
    title: "menu.chickenSalad",
    subtitle: "menu.chickenSalad_sub",
    vegan: false,
  },
  {
    src: "resources/menu/plate_falafel.jpg",
    title: "menu.falafelSalad",
    subtitle: "menu.falafelSalad_sub",
    vegan: true,
  },
  {
    src: "resources/menu/plate_merguez.jpg",
    title: "menu.merguezSalad",
    subtitle: "menu.merguezSalad_sub",
    vegan: false,
  },
  {
    src: "resources/menu/plate_vine.jpg",
    title: "menu.vineSalad",
    subtitle: "menu.vineSalad_sub",
    vegan: true,
  },
  {
    src: "resources/menu/plate_souvlaki.jpg",
    title: "menu.souvlakiSalad",
    subtitle: "menu.souvlakiSalad_sub",
    vegan: false,
  },
  {
    src: "resources/menu/plate_salad.jpg",
    title: "menu.fourSalad",
    subtitle: "menu.fourSalad_sub",
    vegan: true,
  },
];
