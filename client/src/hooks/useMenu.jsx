import { useState } from "react"
import { fakeMenu } from "../fakeData/fakeData"
export const useMenu   = () => {

    const [menu, setMenu] = useState(fakeMenu.MEDIUM)

    return {menu,setMenu}
 }

