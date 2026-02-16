import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom';
import './App.css';
import { Header, Home, FormSection } from './utill/import';

function App() {
  const [isLoading, setLoading] = useState(false);

  useState(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="form" element={<FormSection />}></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
