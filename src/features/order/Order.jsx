// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useUser } from "../../contexts/UserContext";
import OrderItem from "./OrderItem";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";

function Order() {
  const order = useLoaderData();
  const { ordered, dispatch } = useUser();
  const { t } = useTranslation();
  console.log(ordered);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mt-5 px-8">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg sm:text-2xl">{`Order #${id} status`}</h2>

        <div className="flex  gap-4 uppercase text-stone-100 text-sm font-semibold">
          {priority && (
            <span className="bg-red-500 rounded-full px-2 py-1">Priority</span>
          )}
          <span className="bg-green-500 rounded-full px-2 py-1">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center bg-stone-200 px-2 py-5 my-8">
        <p className="font-semibold">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <div className="mb-8 border-y-2">
        <ul className="divide-y-2">
          {order.cart.map((pizza) => (
            <OrderItem pizza={pizza} key={pizza.pizzaId} />
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-1 sm:gap-2 text-sm bg-stone-200 px-5 py-6 mb-5">
        <p>
          {t("pricePizza")}: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p>
            {t("pricePriority")}: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-semibold">
          {t("priceDelivery")}: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      <Button
        type={"primary"}
        to={"/menu"}
        event={() => dispatch({ type: "clear" })}
      >
        {t("newOrder")}
      </Button>
    </div>
  );
}

export async function loader(params) {
  const orderData = getOrder(params.params.orderId);
  return orderData;
}

export default Order;

//eger orderdan menuye dönüldüyse continue ordering yerine new ordering eray gibi buton cikar
