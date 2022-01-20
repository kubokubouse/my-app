import React  from 'react';


// Component
function About() {
  return (
    <div className="inner">
        <section>
          <h2>初期値</h2>
          <p>下記を推奨スタイルとして初期値にしています。</p>
          <ul>
            <li>行長：35文字（ max-width: 35em; ）</li>
            <li>行間：1.75倍（ line-height: 1.75em; ）</li>
            <li>ジャンプ率：200%（ font-size: 2em; ）</li>
          </ul>
          <p>※参考：<a href="https://www.i-ryo.com/entry/2019/02/19/230354">【行長・行間・ジャンプ率】タイポグラフィ事始め（適度な箱組みとは）</a></p>
        </section>
        <section>
          <h2>イイダリョウ</h2>
          <p>フロントエンドエンジニア。神奈川に住まう四十路のオジキ。 DTP→Webデザイナーから転向し今に至る。引き続きコツコツの日々。ブログも書いてます。 Webづくり やりたい時が 始め時！</p>
          <ul>
              <li><a href="https://www.i-ryo.com">ブログ</a></li>
              <li><a href="https://twitter.com/idr_zz">Twitter</a></li>
              <li><a href="https://qiita.com/i-ryo">Qiita</a></li>
              <li><a href="https://github.com/ryo-i">GitHub</a></li>
           </ul>
        </section>
    </div>
  );
}

export default About;
