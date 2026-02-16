import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import './App.css';
import { Header, Home, FormSection, Login, Logout } from './utill/import';

function App() {
  // const [isLoading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);

  useState(() => {
    setTimeout(() => {
      // setLoading(true);
    }, 3000);
  }, []);

  return (
    <>
      {localStorage.getItem('isAuth') && <Header />}
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login userData={userData} setUserData={setUserData} />}
          ></Route>
          <Route path="form" element={<FormSection />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="logout" element={<Logout />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
