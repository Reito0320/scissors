import './Header.css';
import { IoCart } from 'react-icons/io5';
import { CiMenuBurger } from 'react-icons/ci';
export const Header = () => {
  return (
    <>
      <nav className="navigation">
        <div className="navigation-leftBlock">
          <img
            /* 一旦サイズの仮置き */
            width={100}
            height={100}
            className="navigation-leftBlock-logo"
            src="../../../public/scissors_logo.png"
            alt="scissors_logo"
          />
        </div>
        <div className="navigation-rightBlock">
          <button className="navigation-cartButton">
            <IoCart />
          </button>
          <button className="navigation-button">
            <CiMenuBurger />
          </button>
        </div>
      </nav>
      <hr />
    </>
  );
};
