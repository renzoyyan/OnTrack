import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="container px-4 py-4 mx-auto">
      <nav className="flex items-center justify-between">
        <Link to="/" className="logo">
          OnTrack.
        </Link>
        {location.pathname === "/" && (
          <div className="hidden space-x-4 sm:block">
            <span className="text-xs text-gray-400">No account yet?</span>
            <Link to="/signup" className="px-4 btn-signup">
              Create an account
            </Link>
          </div>
        )}
        {location.pathname === "/signup" && (
          <Link
            to="/"
            className="text-gray-500 md:text-gray-800 border-0 btn-signup md:px-4 md:border hover:bg-transparent md:hover:bg-indigo-100 md:hover:border-indigo-100;"
          >
            Already have account?
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
