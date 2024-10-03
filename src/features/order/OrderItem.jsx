/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ pizza }) {
  const { quantity, name, totalPrice } = pizza;
  console.log(pizza);

  return (
    <li className="py-4">
      <div className="flex justify-between items-center text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
