import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layouts';
import Helmet from 'react-helmet';
import HeaderGeneric from '../components/HeaderGeneric';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
      </li>
    ));
    const title = `${
      this.props.data.allMarkdownRemark.totalCount
    } posts tagged with “${this.props.pageContext.tag}”`;
    return (
      <Layout>
        <Helmet title={title} />
        <HeaderGeneric title={title} />
        <div id="main">
          <section id="content" className="main">
            <ul>{postLinks}</ul>
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>{' '}
          </section>
        </div>
      </Layout>
    );
  }
}

export default TagRoute;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
