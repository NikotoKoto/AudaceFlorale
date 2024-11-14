import { useState } from "react";
import { fakeMenu, MenuItem } from "../fakeData/fakeData";

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuItem[]>(fakeMenu.MEDIUM);

  return { menu, setMenu };
};

export const useMenuLastCreation =() => {
  const [lastCreationMenu, setLastCreationMenu] = useState<MenuItem[]>(fakeMenu.SMALL)
  return {lastCreationMenu,setLastCreationMenu}
}
