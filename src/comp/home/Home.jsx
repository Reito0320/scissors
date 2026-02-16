import './Home.css';

/* 画像を右に一枚、その左に説明文を書きたい。 */

export const Home = () => {
  return (
    <section className="main-container">
      <figure className="left-figure">
        <img
          className="left-pic"
          src="https://placehold.jp/500x500.png"
          alt="画像"
        />
        <figcaption className="left-figcaption">卓越した匠の技術</figcaption>
      </figure>
      <figure className="right-figure">
        <img
          className="right-pic"
          src="https://placehold.jp/500x500.png"
          alt="画像"
        />
        <figcaption className="right-figcaption">test test test</figcaption>
      </figure>
    </section>
  );
};
