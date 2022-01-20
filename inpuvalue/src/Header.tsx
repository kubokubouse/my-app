import React from 'react';
import Data from './data/data.json';
import styled from 'styled-components';
import { pageSize } from './style/mixin';
import cssVariables from './style/variables.json';
import { Link } from 'react-router-dom'; // Routing


const variable = cssVariables.variable;
const title = Data.data.header.title;
const text = Data.data.header.text;
const homeUrl = process.env.PUBLIC_URL; // Routing


// Style
const HeaderTag = styled.header`
  ${pageSize}
  text-align: center;
  background: ${variable.bgColor_g};
  padding: 20px;
  & h2 {
    font-size: 2em;
  }
  & nav span {
    padding-right: 0.5em;
  }
`;


// Component
function Header() {
  return (
    <HeaderTag>
        <h2>{ title }</h2>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
          <nav>
            <span>MENU:</span>
            <span><Link to={ homeUrl + "/" }>Home</Link></span>
            <span><Link to={ homeUrl + "/about" }>About</Link></span>
          </nav>
    </HeaderTag>
  );
}

export default Header;
