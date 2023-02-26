import { Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Loading from "./Loading";
import Page404 from "./Page404";
import TokenProvider from '../contexts/Token';
import Request from '../library/Request/Request';

const Comments = lazy(() => import('./Comments'));
const Task = lazy(() => import('./Task'));
const Login = lazy(() => import('./Login'));

const App = () => {
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await Request.post('/login',
          { login: 'letscode', senha: 'lets@123' });
        setToken(data);
      } catch (error) {
        setToken(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("logged") === null) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Suspense
      fallback={<Loading text="Preparando o ambiente" />}
    >
      <TokenProvider.Provider value={{ token }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/task' element={<Task />} />
          <Route path='/comments/:category/:id' element={<Comments />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </TokenProvider.Provider>
    </Suspense>
  );
}

export default App;
