import { fakeCarousselData } from "../fakeData/carousselData";
import { useState } from "react";

export const useImageCaroussel = () => {
    const [imageCaroussel, setImageCaroussel] = useState(fakeCarousselData.IMAGE)
    
    return {imageCaroussel, setImageCaroussel}



}