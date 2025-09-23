import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  sizes?: string[];
  colors?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction = 
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string | { id: string; selectedSize?: string; selectedColor?: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number; selectedSize?: string; selectedColor?: string } }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && 
        item.selectedSize === action.payload.selectedSize &&
        item.selectedColor === action.payload.selectedColor
      );
      
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id && 
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor === action.payload.selectedColor
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        const newTotal = updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return {
          items: updatedItems,
          total: newTotal
        };
      } else {
        const newItems = [...state.items, action.payload];
        const newTotal = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        return {
          items: newItems,
          total: newTotal
        };
      }
      
    case 'REMOVE_ITEM':
      const filteredItems = state.items.filter(item => 
        !(item.id === action.payload || 
          (typeof action.payload === 'object' && 
           item.id === action.payload.id && 
           item.selectedSize === action.payload.selectedSize &&
           item.selectedColor === action.payload.selectedColor))
      );
      const filteredTotal = filteredItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return {
        items: filteredItems,
        total: filteredTotal
      };
      
    case 'UPDATE_QUANTITY':
      const updatedQuantityItems = state.items.map(item => {
        if (typeof action.payload === 'object' && 'id' in action.payload) {
          if (item.id === action.payload.id && 
              (!action.payload.selectedSize || item.selectedSize === action.payload.selectedSize) &&
              (!action.payload.selectedColor || item.selectedColor === action.payload.selectedColor)) {
            return { ...item, quantity: action.payload.quantity };
          }
        }
        return item;
      }).filter(item => item.quantity > 0);
      
      const updatedTotal = updatedQuantityItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      return {
        items: updatedQuantityItems,
        total: updatedTotal
      };
      
    case 'CLEAR_CART':
      return { items: [], total: 0 };
      
    default:
      return state;
  }
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};