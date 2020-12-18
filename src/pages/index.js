import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Container from "../components/Container";
import SectionDark from "../components/SectionDark";
import SectionBlue from "../components/SectionBlue";
import H2 from "../components/H2";
import Copy from "../components/Copy";
import SEO from "../components/seo";
import humpbackWhale from "../images/humpback-whale.jpg";
import whaleData from "../images/whales-data.jpg";
import seiWhale from "../images/sei-whale.jpg";

function IndexPage({ data }) {
  const title = data.site.siteMetadata.title;

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`, `whaling`]}
        title="Stop Whaling"
      />
      <section
        className="bg-center bg-cover flex justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(0,0,0, 0.25), rgba(0,0,0, 0.5)), url(${humpbackWhale})`,
          height: `28rem`,
        }}
      >
        <Container>
          <div className="max-w-xs lg:max-w-md">
            <h1 className="text-6xl font-bold capitalize">{title}</h1>

            <p className="mt-5 capitalize font-semibold text-lg">
              You can have a whale of a time without whaling
            </p>
          </div>
        </Container>
      </section>

      <SectionDark>
        <Container>
          <img className="rounded-lg" src={whaleData} alt="Whaling chart" />

          <Copy>
            Commerical whaling was banned in 1986, yet Norway, Japan, and
            Iceland continue to hunt whales. All of those countries combined
            kill 40,000 big whales and 100,000 small whales, dolpins and
            porpoises a year.
          </Copy>
        </Container>
      </SectionDark>

      <SectionBlue>
        <Container>
          <H2 className="text-xl font-semibold uppercase tracking-wide">
            Other Organisms Affected
          </H2>
          <Copy>
            When whales are killed it affects the food chain and can cause
            overpopulation in those species. That includes shrimp, krill, and
            small fish.
          </Copy>
        </Container>
      </SectionBlue>

      <SectionDark>
        <Container>
          <H2 className="text-xl font-semibold uppercase tracking-wide">
            The Pros and Cons of Whaling
          </H2>
          <Copy>
            Pro: People continue to hunt whales for their meat and oil.
          </Copy>
          <Copy>
            Con: Whales are being hunted in an inhuman way. There are many ways
            to get meat and oil without the hunting of whales.
          </Copy>
        </Container>
      </SectionDark>

      <SectionBlue>
        <Container>
          <img
            className="rounded-lg shadow-lg mb-5"
            src={seiWhale}
            alt="Sei Whale"
          />
          <H2>Where Whaling is Taking Place?</H2>
          <Copy>
            Whales are being hunted in Japan, Norway, and Iceland even though
            there was a ban in 1986.
          </Copy>
        </Container>
      </SectionBlue>

      <SectionDark>
        <Container>
          <H2>What is being done to stop whaling?</H2>
          <Copy>
            The WDC (Whale and Dolphin Conservation) is telling Icelandic
            tourists about the harm of whaling. A decade ago, 40% of tourists
            sampled whale meat. Today, only 12% of tourists sampled the meat.
          </Copy>
        </Container>
      </SectionDark>

      <section className="bg-gray-900">
        <Container>
          <h3 className="text-xl">Resources</h3>
          <ul className="mt-5">
            <li className="duration-300 hover:text-gray-400">
              <a href="https://www.britannica.com/topic/whaling">
                https://www.britannica.com/topic/whaling
              </a>
            </li>
            <li className="mt-3 duration-300 hover:text-gray-400">
              <a href="https://us.whales.org/our-4-goals/stop-whaling/">
                https://us.whales.org/our-4-goals/stop-whaling/
              </a>
            </li>
            <li className="mt-3 duration-300 hover:text-gray-400">
              <a href="https://wwf.panda.org/discover/knowledge_hub/endangered_species/cetaceans/threats/whaling/">
                https://wwf.panda.org/discover/knowledge_hub/endangered_species/cetaceans/threats/whaling/
              </a>
            </li>
            <li className="mt-3 duration-300 hover:text-gray-400">
              <a href="https://www.nationalgeographic.org/encyclopedia/food-chain/">
                https://www.nationalgeographic.org/encyclopedia/food-chain/
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.node.isRequired,
};

export default IndexPage;
