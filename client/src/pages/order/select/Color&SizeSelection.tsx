// Définition des types pour les couleurs et tailles
interface ColorOption {
  id: string;
  colors: string;
}

interface SizeOption {
  id: string;
  size: string;
}

// Liste des couleurs disponibles
const COLORS: ColorOption[] = [
  { id: "1", colors: "red" },
  { id: "2", colors: "blue" },
  { id: "3", colors: "yellow" },
  { id: "4", colors: "white" },
];

// Liste des tailles disponibles
const SIZE: SizeOption[] = [
  { id: "1", size: "petit" },
  { id: "2", size: "moyen" },
  { id: "3", size: "gros" },
];

// Paragraphe d'information sur la livraison
const paragrapheDelivery: string = `
  Vous avez choisis un bouquet de saison, confectionné par nos
  passionnés fleuristes. Audace Florale livre des bouquets de fleurs
  dans le secteur proche de son enseigne, mais afin de vous garantir une
  livraison parfaite, nous avons besoin d’un maximum d’informations. Nos
  livrés sont toujours contactés avant la livraison, afin que nous
  soyons sûr de leurs présence et de trouver une solution si ces
  derniers ne peuvent pas.
`;

// Export des données sous un objet structuré
export const DataSelection = { COLORS, SIZE, paragrapheDelivery };
