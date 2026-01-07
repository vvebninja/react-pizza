import type { OrderedPizza } from '@/components/OrderedPizzaList/OrderedPizzaCard';
import { useMemo, useReducer } from 'react';

type AddedAction = { type: 'added_pizza'; orderedPizza: OrderedPizza };

type QuantityAction = {
  type: 'increased_quantity_by_one' | 'decreased_quantity_by_one' | 'removed_pizza';
  id: OrderedPizza['id'];
};

type ClearAction = { type: 'cleared_cart' };

type ActionType = AddedAction | QuantityAction | ClearAction;

type CartReducerState = { items: OrderedPizza[] };

const initialState = { items: [] };

const cartReducer = (state: CartReducerState, action: ActionType) => {
  switch (action.type) {
    case 'added_pizza': {
      return {
        ...state,
        items: [...state.items, { ...action.orderedPizza }],
      };
    }
    case 'increased_quantity_by_one': {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      };
    }
    case 'decreased_quantity_by_one': {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      };
    }
    case 'removed_pizza': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };
    }
    case 'cleared_cart': {
      return initialState;
    }
  }
};

export type UseCartReducerReturn = {
  items: OrderedPizza[];
  totalItems: number;
  totalPrice: number;
  addItem: (orderedPizza: OrderedPizza) => void;
  clearCart: () => void;
  removeItem: (id: OrderedPizza['id']) => void;
  increaseItemQuantityByOne: (id: OrderedPizza['id']) => void;
  decreaseItemQuantityByOne: (id: OrderedPizza['id']) => void;
};

export const useCartReducer = (): UseCartReducerReturn => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const { totalPrice, totalItems } = useMemo(() => {
    return state.items.reduce(
      (total, item) => {
        total.totalPrice += item.price * item.quantity;
        total.totalItems += item.quantity;
        return total;
      },
      { totalPrice: 0, totalItems: 0 },
    );
  }, [state.items]);

  const addItem = (orderedPizza: OrderedPizza) => {
    const existingItem = state.items.find(item => item.id === orderedPizza.id);

    if (existingItem) {
      dispatch({ type: 'increased_quantity_by_one', id: existingItem.id });
    } else {
      dispatch({ type: 'added_pizza', orderedPizza });
    }
  };

  const removeItem = (id: OrderedPizza['id']) => {
    dispatch({ type: 'removed_pizza', id });
  };

  const clearCart = () => {
    dispatch({ type: 'cleared_cart' });
  };

  const increaseItemQuantityByOne = (id: OrderedPizza['id']) => {
    dispatch({ type: 'increased_quantity_by_one', id });
  };

  const decreaseItemQuantityByOne = (id: OrderedPizza['id']) => {
    dispatch({ type: 'decreased_quantity_by_one', id });
  };

  return {
    items: state.items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    clearCart,
    increaseItemQuantityByOne,
    decreaseItemQuantityByOne,
  };
};
