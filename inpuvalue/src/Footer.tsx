import React from 'react';
import Data from './data/data.json';
import styled from 'styled-components';
import { pageSize } from './style/mixin';


const text = Data.data.footer.text;


// Style
const FooterTag = styled.footer`
  ${pageSize}
  text-align: center;
`;


// Component
function Footer() {
  return (
    <FooterTag>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </FooterTag>
  );
}

export default Footer;
