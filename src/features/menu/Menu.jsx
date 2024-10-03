import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "../menu/MenuItem";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";

function Menu() {
  const data = useLoaderData();
  const { t } = useTranslation();

  return (
    <>
      <Button to="/" type={"back"}>
        &larr; {t("back")}
      </Button>
      <ul className="divide-y divide-stone-300 px-2">
        {data.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
