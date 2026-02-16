import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa';
import './Login.css';
import { db, auth, provider } from '../../utill/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Login = ({ userData, setUserData }) => {
  const navigate = useNavigate();
  const userLoginFunc = async () => {
    const res = await signInWithPopup(auth, provider);
    localStorage.setItem('isAuth', true);
    setUserData(res);
    navigate('/home');
  };
  return (
    <div className="section">
      <div className="login-box">
        <h1>ログインページ</h1>
        <div className="button-cont">
          <button onClick={userLoginFunc} className="login-button">
            <FaGoogle size={30} />
            Google login
          </button>
          <button className="login-button">
            <FaGithub size={30} /> Git Hub
          </button>
          <button className="login-button">
            <FaLine size={30} />
            Line
          </button>
        </div>
      </div>
    </div>
  );
};
