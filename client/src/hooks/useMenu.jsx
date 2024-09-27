import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeData";
import { fakeDataSelection } from "../Components/pages/order/select/Color&SizeSelection";
export const useMenu = () => {
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);

  return { menu, setMenu };
};
