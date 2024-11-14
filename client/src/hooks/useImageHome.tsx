import { useState } from "react";
import { fakeDataHome, ImageCaroussel, ImageDesc } from "../fakeData/fakeDataHome";

export const useImageHome = () => {
  const [imageCaroussel, setImageCaroussel] = useState<ImageCaroussel[]>(
    fakeDataHome.IMAGES_CAROUSSEL
  );
  const [imageDesc, setImageDesc] = useState<ImageDesc[]>(
    fakeDataHome.IMAGES_DESC
  );

  return { imageCaroussel, setImageCaroussel, imageDesc, setImageDesc };
};
