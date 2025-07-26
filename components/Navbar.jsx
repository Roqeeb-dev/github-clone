import GithubLogo from "../public/github-logo.jpg";
import Hamburger from "../public/hamburger.png";
import Button from "./Button";

export default function Navbar() {
  return (
    <>
      {/* Mobile View Navbar */}
      <header className="p-2 py-4 flex items-center justify-between space-3 lg:hidden">
        <button>
          <img src={Hamburger} alt="Hamburger button" />
        </button>
        <img
          src={GithubLogo}
          alt="github logo"
          className="w-[40px] rounded-[50%]"
        />
        <Button
          text="Sign Up"
          className="text-white px-2 py-1 border-1 border-white rounded-md font-bold"
        />
      </header>

      {/* Desktop view Navbar */}
      <header className="flex items-center justify-between p-4 px-7 hidden lg:flex">
        {/* The div at the left side */}
        <div className="flex items-center space-x-5">
          <img
            src={GithubLogo}
            alt="github logo"
            className="w-[40px] rounded-[50%]"
          />
          <ul className="flex items-center space-x-5">
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Open Source</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>

        {/* The div at the right */}
        <div className="flex items-center space-x-5">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search or jump to"
            className="border-1 border-gray-700 rounded-md w-[350px] bg-black text-white p-2 text-[14px]"
          />
          <a href="#">Sign in</a>

          <Button
            text="Sign Up"
            className="text-white px-2 py-1 border-1 border-white rounded-md font-bold"
          />
        </div>
      </header>
    </>
  );
}
