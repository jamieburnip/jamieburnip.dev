import React from "react";
import { Link } from "gatsby";

const ArticleListing = ({ articleEdges }) => {
  const articleList = () => {
    return articleEdges.map(articleEdge => {
      return {
        title: articleEdge.node.frontmatter.title,
        slug: articleEdge.node.fields.slug,
      }
    })
  }

  return (
    <div>
      {/* Your post list here. */
        articleList().map(article => (
          <Link to={article.slug} key={article.title}>
            <h1>{article.title}</h1>
          </Link>
        ))
      }
    </div>
  );
}

export default ArticleListing;
