import { fakeCarousselData } from "../fakeData/carousselData";
import { useState } from "react";

export const useHome = () => {
    const [image, setImage] = useState(fakeCarousselData.IMAGE)




    
    return {image, setImage}



}