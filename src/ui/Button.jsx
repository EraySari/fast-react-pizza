import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button({ children, to, type, event }) {
  const base = "bg-yellow-400 uppercase inline-block rounded-full ";

  const styles = {
    primary: base + "px-4 py-3 md:py-4 md:px-6 text-sm",
    small: base + "px-4 py-3 sm:py-2 text-xs font-semibold",
    back: "text-sm text-blue-500 font-semibold",
    clear:
      "px-4 py-3 md:px-6 md:py-3.5 bg-stone-100 border-2 border-stone-300 rounded-full text-sm  duration-300 uppercase text-stone-400 font-bold hover:bg-stone-300 hover:text-stone-700",
    lng: " bg-yellow-400",
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]} onClick={event}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles[type]} onClick={event}>
      {children}
    </button>
  );
}

export default Button;
