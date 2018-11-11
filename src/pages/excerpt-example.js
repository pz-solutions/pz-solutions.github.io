import React from "react"
import { Link, graphql } from "gatsby"

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <div>
        <div>
          <h1
            css={{
              fontWeight: `800`,
            }}
          >
            This page demonstrates the different types of excerpts you can use
            with gatsby-transformer-remark
          </h1>
          <ul
            css={{
              marginLeft: 0,
              listStyle: `none`,
            }}
          >
            {posts.map(post => (
              <li key={post.node.fields.slug}>
                <span
                  css={{
                    display: `block`,
                  }}
                >
                  {post.node.frontmatter.date}
                </span>
                <Link to={post.node.fields.slug} className="link-underline">
                  {post.node.frontmatter.title}
                </Link>
                <p>{post.node.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { example: { eq: true } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`
