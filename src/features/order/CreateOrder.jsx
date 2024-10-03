import { useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useUser } from "../../contexts/UserContext";
import { formatCurrency } from "../../utils/helpers";
import { useTranslation } from "react-i18next";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const { myCart, userName, totalOrderPrice, dispatch } = useUser();
  const [withPriority, setWithPriority] = useState(false);
  const { t } = useTranslation();

  const priorityPrice = withPriority ? Math.round(totalOrderPrice * 0.2) : 0;
  const lastPrice = totalOrderPrice + priorityPrice;

  const actionData = useActionData();

  return (
    <div className="py-8 px-4">
      <h2 className="text-xl font-semibold pb-8 tracking-wide">{t("ready")}</h2>

      <Form method="POST">
        <div className="flex flex-col sm:flex-row mb-6 sm:items-center">
          <label className="sm:basis-48">{t("firstName")}</label>
          <div className="grow">
            <input
              type="text"
              name="customer"
              defaultValue={userName}
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mb-6 sm:items-center">
          <label className="sm:basis-48">{t("phone")}</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
          </div>
          <p>{actionData?.phone}</p>
        </div>

        <div className="flex flex-col sm:flex-row mb-6 sm:items-center">
          <label className="sm:basis-48">{t("address")}</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="pb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            className="w-4 h-4 focus:outline-none focus:ring accent-yellow-400 focus:ring-yellow-300 focus:ring-offset-2"
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-semibold tracking-wide ">
            {t("priority")}
          </label>
        </div>

        <div>
          <Button
            type={"primary"}
            event={() => dispatch({ type: "ordered" })}
          >{`Order now ${formatCurrency(lastPrice)}`}</Button>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(myCart)} />
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const errors = {};

  const newOrder = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  if (!isValidPhone(newOrder.phone)) {
    errors.phone =
      "Please give us your correct number. We might need it to contact you.";
  }

  if (Object.keys(errors).length > 0) return errors;

  const order = await createOrder(newOrder);

  return redirect(`/order/${order.id}`);
}

export default CreateOrder;
