import { Link } from "react-router-dom";
import logo from "../../assets/svg/bproperty.svg";

const Logo = () => {
  return (
    <Link to={"/"} className="w-32">
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
