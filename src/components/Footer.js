import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700">
      <nav className="flex justify-center max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p className="text-white">
          A Project by{` `}
          <span className="font-bold no-underline">Alex Mercier</span>
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
