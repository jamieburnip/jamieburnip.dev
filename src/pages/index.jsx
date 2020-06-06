import React from "react";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import ArticleListing from "../components/Articles/ArticleListing";
import config from "../../data/SiteConfig";

const HomePage = ({ data: { latest } }) => {
  const latestArticleEdges = latest.edges;

  return (
    <Layout>
      <Helmet title={`${config.siteTitle} – Full Stack Software Developer`} />

      <div className="container">
        <div className="row">
          <div className="twelve column">
            <h1>
              Edit About component or pages/about.jsx to include your information.
            </h1>
            <Link to="/blog">View all</Link>
            <ArticleListing articleEdges={latestArticleEdges} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const articleQuery = graphql`
  query {
    latest: allMdx(limit: 10, sort: {fields: fields___date, order: DESC}) {
      edges {
        node {
          id
          timeToRead
          excerpt(pruneLength: 100)
          fields {
            slug
          }
          frontmatter {
            title
            tags
            slug
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
`

export default HomePage;
