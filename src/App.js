import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/home/home'
import { LoginDos } from './components/Login2/LoginDos';
import {GlobalStyle} from './stylesGlobal'
function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/login"} element={<LoginDos/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
