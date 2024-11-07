import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeData";

export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  return { menu, setMenu };
};

export const useMenuLastCreation =() => {
  const [lastCreationMenu, setLastCreationMenu] = useState(fakeMenu.SMALL)
  return {lastCreationMenu,setLastCreationMenu}
}
