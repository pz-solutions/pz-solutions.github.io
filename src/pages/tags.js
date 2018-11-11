import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../layouts';
import HeaderGeneric from '../components/HeaderGeneric'
import kebabCase from 'lodash/kebabCase';

class TagsPageRoute extends React.Component {
  render() {
    const allTags = this.props.data.allMarkdownRemark.group;

    return (
      <Layout>
        <Helmet title="Tags" />
        <HeaderGeneric title="Tags" />
        <div id="main">
          <section id="content" className="main">
            <ul>
              {allTags.map(tag => (
                <li key={tag.fieldValue}>
                  <Link
                    style={{
                      textDecoration: `none`,
                    }}
                    to={`/tags/${kebabCase(tag.fieldValue)}/`}
                  >
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Layout>
    );
  }
}

export default TagsPageRoute;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { draft: { ne: true }, example: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
