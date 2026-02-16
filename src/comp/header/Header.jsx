import './Header.css';
import { IoCart } from 'react-icons/io5';
import { CiMenuBurger } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';

export const Header = () => {
  return (
    <>
      <nav className="navigation">
        <span>ここにuserのログイン情報を出したい</span>
        <div className="navigation-leftBlock">
          <a href="/home">
            <img
              /* 一旦サイズの仮置き */
              width={200}
              height={150}
              className="navigation-leftBlock-logo"
              src="../../../public/scissors_logo.png"
              alt="scissors_logo"
            />
          </a>
        </div>
        <div className="navigation-rightBlock">
          <button className="navigation-cartButton">
            <IoCart size={50} />
          </button>
          <button className="navigation-button">
            <CiLogout size={50} />;
          </button>
          <button className="navigation-button">
            <CiMenuBurger size={50} />
          </button>
        </div>
      </nav>
      <hr />
    </>
  );
};
