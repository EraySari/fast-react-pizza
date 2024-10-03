import { useUser } from "../contexts/UserContext";
import Language from "./Language";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Username from "./Username";

function Header() {
  const { isSubmitUser } = useUser();
  return (
    <header className="bg-yellow-400 uppercase flex justify-between items-center sm:px-4 px-2  py-3 border-b border-stone-300">
      <Logo />
      <div className="flex justify-center items-center gap-5">
        <SearchBar />
        <Language />
      </div>

      {isSubmitUser && <Username />}
    </header>
  );
}

export default Header;
