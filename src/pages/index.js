import React from "react"
import g from "glamorous";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ data }) => {
  return (
    <div>
      <h1>Aphex Twin Interviews</h1>
      <h4>{data.allMarkdownRemark.totalCount} Interviews</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >

            <g.H3 paddingBottom={0} marginBottom={20}>
              {node.frontmatter.title}{" "}
              <g.Span color="#BBB">- {node.frontmatter.date}</g.Span> 
            </g.H3>
          </Link>
        </div>
      ))}
      <div>
        <img src="https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/5/12/1399892260489/161df2d3-73b0-482b-84fd-1d7741200fe5-460x276.jpeg?w=620&q=55&auto=format&usm=12&fit=max&s=fc54a2616b3b2c00c5cca177fae10af3" alt="AFX" />
      </div>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
