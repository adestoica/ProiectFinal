import { Link } from "react-router-dom";

export const Navbar = ({ path, children }) => {
  return (
    <>
      <li className="   hover:bg-green-700 hover: rounded-xl hover: p-1   mx-5 my-1">
        <Link to={path}>{children}</Link>
      </li>
    </>
  );
};
