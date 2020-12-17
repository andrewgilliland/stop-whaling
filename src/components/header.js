import { Link } from "gatsby";
import React from "react";

function Header() {
  return (
    <header className="fixed w-full bg-blue-700">
      <div className="flex flex-wrap items-center justify-center max-w-4xl p-2 mx-auto md:p-4">
        <Link to="/">
          <span>🐋</span>
          <span>🐋</span>
          <span>🐋</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
