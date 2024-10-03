import { useTranslation } from "react-i18next";
import { useUser } from "../../contexts/UserContext";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const { myCart, totalOrderPrice } = useUser();
  const { t } = useTranslation();

  return (
    <div className="bg-stone-800 uppercase text-stone-200 flex items-center justify-between px-4 py-2 sm:py-4">
      <p className="space-x-4 sm:space-x-6 font-semibold">
        <span>{myCart.length} pizzas</span>
        <span>{formatCurrency(totalOrderPrice)}</span>
      </p>
      <Button to={"/cart"}>{t("openCart")} &rarr;</Button>
    </div>
  );
}

export default CartOverview;
