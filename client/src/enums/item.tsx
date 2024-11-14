export interface Item {
    id: string;
    color: string;
    size: string;
  }
  
  export const EMPTY_ITEM: Readonly<Item> = Object.freeze({
    id: "",
    color: "",
    size: "",
  });
  