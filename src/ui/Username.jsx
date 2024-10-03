import { useUser } from "../contexts/UserContext";

function Username() {
  const { userName } = useUser();

  return (
    <div className="hidden sm:block text-sm font-semibold md:block dark:text-yellow-600">
      {userName}
    </div>
  );
}

export default Username;
