import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "../styles/highlight-syntax.css";
import "./post.css";

import CarbonAd from "../components/Ads/CarbonAd";
import GoogleAd from "../components/Ads/GoogleAd";

const Ad = CarbonAd;
const shortcodes = { Ad }; // Provide common components here

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    const { github } = postNode.fields

    if (!post.id) {
      post.id = slug;
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />

        <div className="container">
          <div className="row">
            <div className="twelve column">
              <h1>{post.title}</h1>
              <a href={github} rel="nofollow">
                <em>edit ✏️</em>
              </a>

              <MDXProvider components={shortcodes}>
                <MDXRenderer>{postNode.body}</MDXRenderer>
              </MDXProvider>

              {/* <div dangerouslySetInnerHTML={{ __html: postNode.html }} /> */}

              <div className="post-meta">
                <PostTags tags={post.tags} />
                <SocialLinks postPath={slug} postNode={postNode} />
              </div>

              <UserInfo config={config} />
              <Footer config={config} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark: mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      timeToRead
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
        github
      }
    }
  }
`;
