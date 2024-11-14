export interface ImageCaroussel {
  src: string;
  buttonText: string;
  buttonLink: string;
  title: string;
}

export interface ImageDesc {
  src: string;
  title: string;
 
}

export const IMAGES_CAROUSSEL: ImageCaroussel[] = [
  {
    src: "/images/carousselAssets/photoSlide1.png",
    buttonText: "Commandez votre bouquet",
    buttonLink: "/order",
    title: "Fleur de saison",
  },
  {
    src: "/images/carousselAssets/photoSlide2.png",
    buttonText: "Découvrez notre travail",
    buttonLink: "/wedding",
    title: "Je me marie",
  },
];

export const IMAGES_DESC: ImageDesc[] = [
  {
    src: "/images/descAssets/flowerside.jpg",
    title: "Côté fleurs",
    
  },
  {
    src: "/images/descAssets/Brocante.jpg",
    title: "Cote broc'",
  },
  {
    src: "/images/descAssets/teaLounge.jpg",
    title: "Côté salon de thé",
  },
];

export const fakeDataHome = {
  IMAGES_CAROUSSEL,
  IMAGES_DESC,
};
