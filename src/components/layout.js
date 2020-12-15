import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-black text-gray-100">
      <Header />
      <main className="flex-1 w-full max-w-4xl pb-8 mx-auto md:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
