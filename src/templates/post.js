import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const pageStyles = {
  color: "#232129",
  padding: "8vw",
  paddingTop: 10,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Post = ({ data }) => {
  const post = data.markdownRemark;
  return (
     <Layout>
      <main style={pageStyles}>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
    </Layout>
  );
};

export const Head = ({ data }) => {
  const post = data.markdownRemark;
  return <title>{post.frontmatter.title}</title>;
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

export default Post;
