import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/home/home'
import {GlobalStyle} from './stylesGlobal'
function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
