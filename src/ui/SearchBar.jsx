import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [order, setOrder] = useState();
  const { t } = useTranslation();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${order}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={t("searchOrder")}
        className="input"
        onChange={(e) => setOrder(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
