import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/home/home'
import { LoginDos } from './components/Login2/LoginDos';
import { Detail } from './pages/detail/detail';
import {GlobalStyle} from './stylesGlobal'
import { Promotion } from './components/promotion/Promotion';



function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/login"} element={<LoginDos/>}/>
      <Route path={"/detail/:id"} element={<Detail/>}/>
    </Routes>
    < Promotion/>
    <div className="App">

    </div>
    </BrowserRouter>

  );
}

export default App;
