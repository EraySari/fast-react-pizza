import { useTranslation } from "react-i18next";
import CreateUser from "../features/user/CreateUser";

function Home() {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <div className=" text-center my-10 sm:my-28">
      <h1 className="font-semibold text-xl sm:text-3xl mb-8">
        <span className="text-stone-700 ">{t("welcomeLine1")}</span>
        <br />
        <span className="text-yellow-500">{t("welcomeLine2")}</span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
