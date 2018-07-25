import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import logo from "../assets/afx.svg"; // Tell Webpack this JS file uses this image


import { rhythm } from "../utils/typography";

const linkStyle = css({ float: `right`, textAlign: `center` });

export default ({ children }) => (
  <g.Div
    margin={`0 auto`}
    maxWidth={900}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <Link to={`/`}>
      <g.Img src={logo} 
        maxWidth={`30%`} 
      />
      /*
      <g.H3
        textAlign={`center`}
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        Aphex Twin Interviews
      </g.H3>
      */
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      About
    </Link>
      {children()}
    </g.Div>
)
