import React, { createContext, useContext, useState, ReactNode } from "react";
import { fakeMenu } from "../fakeData/fakeData";


// Define the types
export interface MenuItem {
  id: string | number;
  imageSource: string;
  title: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
  isAdvertised: boolean;
}

export interface BasketItem extends MenuItem {
  color: string;
  size: string;
}

interface OrderContextType {
  menu: MenuItem[];
  setMenu: (menu: MenuItem[]) => void;
  itemSelected: MenuItem | null;
  setItemSelected: (item: MenuItem | null) => void;
  addItemToBasket: (item: BasketItem) => void;
  basketItems: BasketItem[];
}

// Create context with default values
const OrderContext = createContext<OrderContextType>({
  menu: [],
  setMenu: () => {},
  itemSelected: null,
  setItemSelected: () => {},
  addItemToBasket: () => {},
  basketItems: [],
});

// Provider component
export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize `menu` state with data from `fakeMenu.SMALL`
  const [menu, setMenu] = useState<MenuItem[]>(fakeMenu.MEDIUM);
  const [itemSelected, setItemSelected] = useState<MenuItem | null>(null);
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const addItemToBasket = (item: BasketItem) => {
    setBasketItems((prevItems) => [...prevItems, item]);
  };

  return (
    <OrderContext.Provider
      value={{
        menu,
        setMenu,
        itemSelected,
        setItemSelected,
        addItemToBasket,
        basketItems,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

// Custom hook for consuming the context
export const useOrder = () => useContext(OrderContext);

export default OrderContext;
