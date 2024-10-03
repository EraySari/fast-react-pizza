import { formatCurrency } from "../../utils/helpers";

/* eslint-disable react/prop-types */
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className=" px-4 py-2 flex justify-between items-center">
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
