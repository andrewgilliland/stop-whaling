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
          <H2 className="text-xl font-semibold uppercase tracking-wide">
            Hello Whales
          </H2>
          <Copy>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            incidunt corrupti esse ullam, possimus doloremque consectetur saepe
            reprehenderit soluta, alias, eos assumenda explicabo veritatis
            laboriosam modi amet aliquid tempore! Voluptate!
          </Copy>
        </Container>
      </SectionDark>

      <SectionBlue>
        <Container>
          <H2 className="text-xl font-semibold uppercase tracking-wide">
            Hello Whales
          </H2>
          <Copy>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            incidunt corrupti esse ullam, possimus doloremque consectetur saepe
            reprehenderit soluta, alias, eos assumenda explicabo veritatis
            laboriosam modi amet aliquid tempore! Voluptate!
          </Copy>
        </Container>
      </SectionBlue>

      <SectionDark>
        <Container>
          <H2 className="text-xl font-semibold uppercase tracking-wide">
            Hello Whales
          </H2>
          <Copy>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            incidunt corrupti esse ullam, possimus doloremque consectetur saepe
            reprehenderit soluta, alias, eos assumenda explicabo veritatis
            laboriosam modi amet aliquid tempore! Voluptate!
          </Copy>
        </Container>
      </SectionDark>
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
