import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

function Header() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-blue-700">
      <div className="flex flex-wrap items-center justify-center max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <span>🐋</span>
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
            <span>🐋</span>
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
