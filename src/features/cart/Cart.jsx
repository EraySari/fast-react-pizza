import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import { useUser } from "../../contexts/UserContext";
import { useTranslation } from "react-i18next";

function Cart() {
  const { myCart } = useUser();
  const { userName, dispatch } = useUser();
  const { t } = useTranslation();

  return myCart.length > 0 ? (
    <div className="pt-6">
      <Button to="/menu" type={"back"}>
        &larr; {t("backMenu")}
      </Button>

      <h2 className="py-7 font-semibold">
        {t("yourCart")} <span className="uppercase">{userName}</span>
      </h2>
      <ul className="py-6 divide-y-2">
        {myCart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="py-6 space-x-4">
        <Button to="/order/new" type={"primary"}>
          {t("order")}
        </Button>
        <Button type={"clear"} event={() => dispatch({ type: "deleteCart" })}>
          Clear cart
        </Button>
      </div>
    </div>
  ) : (
    <EmptyCart />
  );
}

export default Cart;
