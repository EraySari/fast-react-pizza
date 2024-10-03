/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  userName: "",
  myCart: [],
  selectedPizza: null,
  isSubmitUser: false,
  totalOrderPrice: 0,
  ordered: false,
};

function updateTotalOrderPrice(array) {
  return array.reduce((total, pizza) => total + pizza.totalPrice, 0);
}

function reducer(state, action) {
  switch (action.type) {
    case "username":
      return { ...state, userName: action.payload };

    case "submitUser":
      return { ...state, isSubmitUser: action.payload };

    case "addToCart":
      return {
        ...state,
        myCart: [...state.myCart, action.payload],
        selectedPizza: action.payload.pizzaId,
        totalOrderPrice: updateTotalOrderPrice([
          ...state.myCart,
          action.payload,
        ]),
      };

    case "deleteFromCart": {
      const newCart = state.myCart.filter(
        (pizza) => pizza.pizzaId !== action.payload
      );

      return {
        ...state,
        myCart: newCart,
        totalOrderPrice: updateTotalOrderPrice(newCart),
      };
    }

    case "increase": {
      const newCart = state.myCart.map((pizza) =>
        pizza.pizzaId === action.payload
          ? {
              ...pizza,
              quantity: pizza.quantity + 1,
              totalPrice: pizza.unitPrice * (pizza.quantity + 1),
            }
          : { ...pizza }
      );
      return {
        ...state,
        myCart: newCart,
        totalOrderPrice: updateTotalOrderPrice(newCart),
      };
    }
    case "reduce": {
      const newCart = state.myCart.map((pizza) =>
        pizza.pizzaId === action.payload
          ? {
              ...pizza,
              quantity: pizza.quantity - 1,
              totalPrice: pizza.unitPrice * (pizza.quantity - 1),
            }
          : { ...pizza }
      );

      return {
        ...state,
        myCart: newCart,
        totalOrderPrice: updateTotalOrderPrice(newCart),
      };
    }

    case "deleteCart": {
      return { ...state, myCart: [], selectedPizza: null, totalOrderPrice: 0 };
    }

    case "ordered":
      return { ...state, ordered: true };

    case "clear":
      return {
        ...initialState,
        userName: state.userName,
        isSubmitUser: true,
      };

    default:
      break;
  }
}
function UserProvider({ children }) {
  const [
    { userName, isSubmitUser, myCart, selectedPizza, totalOrderPrice, ordered },
    dispatch,
  ] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider
      value={{
        userName,
        isSubmitUser,
        myCart,
        selectedPizza,
        totalOrderPrice,
        ordered,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  return context;
}

export { UserProvider, useUser };
