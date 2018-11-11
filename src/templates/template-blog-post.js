import React from 'react';
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import rehypeReact from 'rehype-react';

import Counter from '../components/Counter';
import Layout from '../layouts';
import HeaderGeneric from '../components/HeaderGeneric'

import 'katex/dist/katex.min.css';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'interactive-counter': Counter },
}).Compiler;

class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    let tags;
    let tagsSection;
    if (post.fields.tagSlugs) {
      const tagsArray = post.fields.tagSlugs;
      tags = tagsArray.map((tag, i) => {
        const divider = i < tagsArray.length - 1 && <span>{`, `}</span>;
        return (
          <span key={tag}>
            <Link to={tag}>{post.frontmatter.tags[i]}</Link>
            {divider}
          </span>
        );
      });
      tagsSection = (
        <span
          css={{
            fontStyle: `normal`,
            textAlign: `left`,
          }}
        >
          tagged {tags}
        </span>
      );
    }

    return (
      <Layout>
        <Helmet title={post.frontmatter.title} />
        <HeaderGeneric title={post.frontmatter.title}>
          {post.timeToRead} min read &middot; {tagsSection}
        </HeaderGeneric>

        <div id="main">
          <section id="content" className="main">
            <h2>Contents</h2>
            <div
              dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
              className="toc"
            />

            {renderAst(post.htmlAst)}
            <hr css={{}} />
            <p
              css={{
                display: `flex`,
                alignItems: `center`,
              }}
            >
              <Img
                alt={`Avatar of ${post.frontmatter.author.id}`}
                fixed={post.frontmatter.author.avatar.children[0].fixed}
                css={{
                  borderRadius: `100%`,
                  float: `left`,
                  marginBottom: 0,
                }}
                Tag="span"
              />
              <span css={{}}>
                <small
                  css={{
                    fontWeight: `bold`,
                    textTransform: `uppercase`,
                  }}
                >
                  {post.frontmatter.author.id}
                </small>
                {` `}
                {post.frontmatter.author.bio}
              </span>
            </p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default BlogPostRoute;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      tableOfContents
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        author {
          id
          bio
          avatar {
            children {
              ... on ImageSharp {
                fixed(width: 50, height: 50, quality: 75, grayscale: true) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
