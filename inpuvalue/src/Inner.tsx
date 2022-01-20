import React, { useState } from 'react';
import styled from 'styled-components';


// Style
const Setting = styled.div`
  margin: 30px 0;
  dt {
    font-weight: bold;
    .css {
      font-weight: normal;
    }
  }
  dd {
    margin: 0 0 1em;
  }
  input {
    width: 100%;
    max-width: 600px;
  }
`;

const Example = styled.div`
  background: #eee;
  display: inline-block;
  border-radius: 10px;
  font-size: 14px;
  section {
    margin: 30px;
    line-height: 1.75em;
    h2 {
      color: #000;
      line-height: 1.25em;
      margin: 0 0 1em;
    }
    p {
      margin: 0;
    }
  }
`;


// Component
function Inner() {
  const [lineLength, setLineLength] = useState(35);
  const [lineHeight, setLineHeight] = useState(1.75);
  const [jumpRate, setJumpRate] = useState(2);


  const useChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let changeValue: number = Number(e.target.value);
    return changeValue;
  };

  const ChangeLineLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = useChangeValue(e);
    setLineLength(changeValue);
  };

  const ChangeLineHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = useChangeValue(e);
    setLineHeight(changeValue);
  };

  const ChangeJumpRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeValue = useChangeValue(e);
    setJumpRate(changeValue);
  };


  const P = styled.p`
    line-height: ${lineHeight}em;
  `;

  const Section = styled.section`
    max-width: ${lineLength}em;
  `;

  const H2 = styled.h2`
    && {
      font-size: ${jumpRate}em;
    }
  `;


  return (
    <div className="inner">
      <Setting>
        <dl>
          <dt>
            行長：{lineLength}文字
            <span className="css">（ max-width: {lineLength}em; ）</span>
          </dt>
          <dd>
            <input type="range" name="range" min="10" max="50" defaultValue={lineLength} onChange={ChangeLineLength} />
          </dd>
          <dt>
            行間：{lineHeight}倍
            <span className="css">（ line-height: {lineHeight}em; ）</span>
          </dt>
          <dd>
            <input type="range" name="range" min="1" max="3" step="0.05" defaultValue={lineHeight} onChange={ChangeLineHeight} />
          </dd>
          <dt>
            ジャンプ率：{Math.round(jumpRate * 100)}%
            <span className="css">（ font-size: {jumpRate}em; ）</span>
          </dt>
          <dd>
            <input type="range" name="range" min="1" max="4" step="0.05" defaultValue={jumpRate} onChange={ChangeJumpRate} />
          </dd>
        </dl>
      </Setting>
      <Example>
        <Section>
          <H2>タイトルです、ああタイトルです、タイトルです</H2>
          <P>本文です。本文です。本文ですったら、本文です。本文です。本文です。本文ですったら、本文です。本文です。本文です。本文ですったら、本文です。本文です。本文です。本文ですったら、本文です。本文です。本文です。本文ですったら、本文です。本文です。本文です。本文ですったら、本文です。本文です。本文です。本文ですったら、本文です。本文です。本文です。本文ですったら、本文です。本文です。本文です。本文ですったら、本文です。</P>
        </Section>
      </Example>
    </div>
  );
}

export default Inner;
