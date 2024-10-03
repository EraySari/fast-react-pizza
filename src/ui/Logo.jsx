import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"} className="tracking-widest font-light">
      Fast React Pizza Co.
    </Link>
  );
}

export default Logo;
