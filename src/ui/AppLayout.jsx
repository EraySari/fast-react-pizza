import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../ui/Loader.jsx";
import { useUser } from "../contexts/UserContext.jsx";

function AppLayout() {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  const { myCart, ordered } = useUser();
  console.log(myCart);

  return (
    <div className="bg-stone-100 h-screen grid grid-rows-[auto_1fr_auto]">
      {loading && <Loader />}

      <Header />
      <div className="overflow-scroll">
        <main className="max-w-3xl mx-auto">
          <Outlet />
        </main>
      </div>
      {myCart.length > 0 && !ordered && <CartOverview />}
    </div>
  );
}

export default AppLayout;
