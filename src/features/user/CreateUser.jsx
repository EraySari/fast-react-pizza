import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import { useState } from "react";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";

function CreateUser() {
  const { userName, isSubmitUser, dispatch } = useUser();
  const [isValidName, setIsValidName] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();
  function handleSubmit(e) {
    e.preventDefault();

    if (userName.length < 3) {
      return setIsValidName(false);
    }

    dispatch({ type: "submitUser", payload: true });
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center">
        {!isSubmitUser && (
          <>
            <p className="mb-2 sm:mb-4">{t("usernameLine")}</p>
            <input
              type="text"
              placeholder={t("fullNamePh")}
              value={userName}
              onChange={(e) =>
                dispatch({ type: "username", payload: e.target.value })
              }
              className="input w-72 mb-4"
            />
            {!isValidName && (
              <p className="bg-red-100 mb-4 rounded-md px-4 py-2 text-red-500 text-sm">
                {t("nameError")}
              </p>
            )}
          </>
        )}

        {userName !== "" && (
          <Button type={"primary"}>
            {isSubmitUser
              ? `${t("continue")}, ${userName}`
              : `${t("startButton")}`}
          </Button>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
