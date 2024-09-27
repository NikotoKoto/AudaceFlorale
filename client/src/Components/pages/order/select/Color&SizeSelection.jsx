const COLORS = [
  { id: "1", colors: "red" },
  { id: "2", colors: "blue" },
  { id: "3", colors: "yellow" },
  { id: "4", colors: "white" },
];

const SIZE = [
  {
    id: "1",
    size: "petit",
  },
  { id: "2", size: "moyen" },
  { id: "3", size: "gros" },
];

const paragrapheDelivery= 
   `Vous avez choisis un bouquet de saison, confectionné par nos
          passionnés fleuristes. Audace Florale livre des bouquets de fleurs
          dans le secteur proche de son enseigne, mais afin de vous garantir une
          livraison parfaite, nous avons besoin d’un maximum d’informations. Nos
          livrés sont toujours contactés avant la livraison, afin que nous
          soyons sûr de leurs présence et de trouver une solution si ces
          derniers ne peuvent pas.`


export const DataSelection = { COLORS, SIZE, paragrapheDelivery };
