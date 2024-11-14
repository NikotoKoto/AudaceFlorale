import { createContext, Dispatch, SetStateAction } from "react";

interface ContextProps {
  imageCaroussel: string[]; // Tableau d'images pour le carrousel
  setImageCaroussel: Dispatch<SetStateAction<string[]>>; // Setter pour imageCaroussel
  imageDesc: string[]; // Tableau de descriptions d'images
  setImageDesc: Dispatch<SetStateAction<string[]>>; // Setter pour imageDesc
  lastCreationMenu: string[]; // Tableau pour les dernières créations du menu
  setLastCreationMenu: Dispatch<SetStateAction<string[]>>; // Setter pour lastCreationMenu
}

// Initialiser le contexte avec des valeurs par défaut
const TypedContext = createContext<ContextProps>({
  imageCaroussel: [],
  setImageCaroussel: () => {},
  imageDesc: [],
  setImageDesc: () => {},
  lastCreationMenu: [],
  setLastCreationMenu: () => {},
});

export default TypedContext;
