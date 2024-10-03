import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";

function EmptyCart() {
  const { t } = useTranslation();
  return (
    <div className="py-5 px-5">
      <Button to="/menu" type={"back"}>
        &larr; {t("backMenu")}
      </Button>

      <p className="my-10 bg-red-100 text-red-500 px-5 py-5 rounded-lg text-sm font-semibold">
        {t("empty")}
      </p>
    </div>
  );
}

export default EmptyCart;
