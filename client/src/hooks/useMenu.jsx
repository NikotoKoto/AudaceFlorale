import { fakeCarousselData } from "../fakeData/carousselData";
import { useState } from "react";

export const useMenu = () => {
    const [menu, setMenu] = useState(fakeCarousselData.IMAGE)




    
    return {menu, setMenu}



}