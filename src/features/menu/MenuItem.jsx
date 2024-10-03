import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useUser } from "../../contexts/UserContext";
import { action } from "../order/CreateOrder";
import QuantityButtons from "../../ui/QuantityButtons";
import { useTranslation } from "react-i18next";

/* eslint-disable react/prop-types */
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const { myCart, selectedPizza, dispatch } = useUser();
  const { t } = useTranslation();

  {
    /* include olmaz cunku parametre olarak fonksiyon veremiyoruz o yüzden some kullandik */
  }
  const onCart = myCart.some((pizza) => pizza.pizzaId === id);

  return (
    <li className="flex gap-4 py-2 sm:py-3 ">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-50 grayscale" : ""}`}
      />
      <div className="flex flex-col flex-grow">
        <p className="font-medium">{name}</p>
        <p className="text-stone-500 capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="flex items-center justify-between mt-auto text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p>{t("soldout")}</p>
          )}

          <div className="flex items-center justify-between gap-3">
            <div>
              {!onCart ? (
                !soldOut ? (
                  <Button
                    type={"small"}
                    event={() => {
                      dispatch({
                        type: "addToCart",
                        payload: {
                          pizzaId: id,
                          name,
                          unitPrice,
                          quantity: 1,
                          totalPrice: unitPrice,
                        },
                      });
                    }}
                  >
                    {t("add")}
                  </Button>
                ) : (
                  ""
                )
              ) : (
                <div className="flex gap-3">
                  <QuantityButtons id={id} />
                  <Button
                    type={"small"}
                    event={() => {
                      dispatch({ type: "deleteFromCart", payload: id });
                    }}
                  >
                    {t("delete")}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
