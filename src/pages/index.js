import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import humpbackWhale from "../images/humpback-whale.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Stop Whaling"
      />

      <section className="text-center">
        <img
          alt="Humpback Whale"
          className="block w-full mx-auto mb-8"
          src={humpbackWhale}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-blue-700 rounded-lg">
          You can have a whale of a time without whaling
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          Tailwind CSS, a utility-first CSS framework.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
