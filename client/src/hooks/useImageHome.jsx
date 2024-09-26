import { fakeDataHome } from "../fakeData/fakeDataHome";
import { useState } from "react";

export const useImageHome = () => {
    const [imageCaroussel, setImageCaroussel] = useState(fakeDataHome.IMAGES_CAROUSSEL)
    const [imageDesc, setImageDesc] = useState(fakeDataHome.IMAGES_DESC)
    return {imageCaroussel, setImageCaroussel, imageDesc,setImageDesc}



}