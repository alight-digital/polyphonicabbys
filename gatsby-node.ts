const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// Add slugs to Markdown files
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" });

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

// Create pages from Markdown files
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("./src/templates/post.js");

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading Markdown files", result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  posts.forEach((post) => {
    createPage({
      path: post.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.fields.slug,
      },
    });
  });
};
