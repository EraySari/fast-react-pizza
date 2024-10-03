import { useTranslation } from "react-i18next";
import Button from "./Button";
import { GB } from "country-flag-icons/react/3x2";
import { DE } from "country-flag-icons/react/3x2";
import { useState } from "react";
import Loader from "./Loader";

function Language() {
  const { i18n } = useTranslation();
  const [lng, setLng] = useState(false);

  const clickHandle = async () => {
    setLng(true);
    setTimeout(async () => {
      const lang = i18n.language === "en" ? "de" : "en";
      await i18n.changeLanguage(lang);
      setLng(false);
    }, 1000);
  };
  return (
    <div className="flex items-center">
      {lng && <Loader />}
      <Button type={"lng"} event={() => clickHandle()}>
        {i18n.language === "en" ? (
          <DE width="30" height="30" />
        ) : (
          <GB width="30" height="30" />
        )}
      </Button>
    </div>
  );
}

export default Language;
