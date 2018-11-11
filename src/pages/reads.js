import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../layouts';
import HeaderGeneric from '../components/HeaderGeneric';
import Tile from '../components/Tile';
import TileContainer from '../components/TileContainer';
import pic04 from '../assets/images/pic04.jpg';

class Generic extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={pic04} alt="" />
            </span>
            <TileContainer>
              {data.allPocketArticle.edges
                .map(edge => edge.node)
                .map(article => (
                  <Tile key={article.id} rowSpan={(article.image || article.excerpt.length>150) ? 2 : undefined}>
                    <h3>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {article.title}
                      </a>
                    </h3>
                    {article.image && (
                      <img
                        className="major style1"
                        src={article.image.src}
                        width="100%"
                        alt="article"
                      />
                    )}
                    <p>{article.excerpt}</p>
                  </Tile>
                ))}
            </TileContainer>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;

export const pageQuery = graphql`
  query {
    allPocketArticle {
      edges {
        node {
          id
          url
          title
          excerpt
          image {
            item_id
            src
            width
            height
          }
        }
      }
    }
  }
`;
