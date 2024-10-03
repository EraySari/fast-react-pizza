import { useUser } from "../contexts/UserContext";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
function QuantityButtons({ id }) {
  const { myCart, dispatch } = useUser();

  const currPizza = myCart.find((pizza) => pizza.pizzaId === id);

  return (
    <div className="flex items-center gap-2">
      <Button
        type={"small"}
        event={() =>
          dispatch(
            currPizza.quantity > 1
              ? { type: "reduce", payload: id }
              : { type: "deleteFromCart", payload: id }
          )
        }
      >
        -
      </Button>
      <span>{currPizza.quantity}</span>
      <Button
        type={"small"}
        event={() => dispatch({ type: "increase", payload: id })}
      >
        +
      </Button>
    </div>
  );
}

export default QuantityButtons;
