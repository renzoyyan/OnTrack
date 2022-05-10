import { Link } from "react-router-dom";

const Navbar = ({ login }) => {
  return (
    <header className="container py-4 mx-auto">
      <nav className="flex items-center justify-between">
        <h1 className="text-2xl text-indigo-600">OnTrack.</h1>
        {login ? (
          <div className="space-x-4">
            <span className="text-xs text-gray-400">No account yet?</span>
            <Link
              to="/signup"
              className="inline-block px-4 py-2 text-sm transition duration-200 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-indigo-100 hover:border-indigo-100"
            >
              Create Account
            </Link>
          </div>
        ) : (
          <div>
            <Link
              to="/"
              className="inline-block px-4 py-2 text-sm transition duration-200 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-indigo-100 hover:border-indigo-100"
            >
              Already have account?
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
