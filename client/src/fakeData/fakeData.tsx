export interface MenuItem {
  id: string |number ;
  imageSource: string;
  title: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
  isAdvertised: boolean;
}

const EMPTY: MenuItem[] = [];

const SMALL: MenuItem[] = [
  {
    id: "1",
    imageSource: "/images/menuAssets/champettre.jpg",
    title: "Le Louis",
    price: 35,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "2",
    imageSource: "/images/menuAssets/septemberMood.jpg",
    title: "September Mood",
    price: 35,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "3",
    imageSource: "/images/menuAssets/champe.jpg",
    title: "Champettre de saison",
    price: 35,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
];

const MEDIUM: MenuItem[] = [
  {
    id: "1",
    imageSource: "/images/menuAssets/jetaime.webp",
    title: "Je t'aime",
    price: 35,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "2",
    imageSource: "/images/menuAssets/september.jpg",
    title: "September Mood",
    price: 35,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "3",
    imageSource: "/images/menuAssets/champe.jpg",
    title: "Champettre de saison",
    price: 35,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
];

const LARGE: MenuItem[] = [
  {
    id: "1",
    imageSource: "/images/burger-bacon-egg.png",
    title: "Burger Smoke BBQ",
    price: 5.598,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "2",
    imageSource: "/images/burger-vegan.png",
    title: "Vegan Burger",
    price: 5.4985,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "3",
    imageSource: "/images/burger3.png",
    title: "Burger poulet",
    price: 5.367,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "4",
    imageSource: "/images/drink1.png",
    title: "Coke 25cl",
    price: 3.568,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "5",
    imageSource: "/images/drink2.png",
    title: "Pepsi 25cl",
    price: 3.487,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "6",
    imageSource: "/images/drink3.png",
    title: "Iced Tea 25cl",
    price: 3.356,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "7",
    imageSource: "/images/frites1.png",
    title: "Frites Paprika",
    price: 2.567,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "8",
    imageSource: "/images/fries3.png",
    title: "New York Fries",
    price: 3.1678,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "9",
    imageSource: "/images/wedges1.png",
    title: "Crispy Potatoes",
    price: 3.7,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
  {
    id: "10",
    imageSource: "/images/ice-cream.png",
    title: "Glaces artisanales",
    price: 4.678,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
];

export const fakeMenu = {
  EMPTY,
  SMALL,
  MEDIUM,
  LARGE,
};
