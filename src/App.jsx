import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './pags/home';
import Loginini from './pags/loginini';
import LoginE from './pags/login-studen';
import LoginT from './pags/login-teacher';
import Registro from './pags/registr';
import MenuEstudiante from './pags/MenuE';
import ActividadesEstudiante from './pags/actividadesE';
import SubirActividades from './pags/subirE';
import AsistenciaTutorias from './pags/tutoriaE';
import MenuDocente from './pags/MenuT';
import RegistroTutorias from './pags/tutoriaT';
import VerTutorias from './pags/vertutorias';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/loginini' element={<Loginini/>}/>
          <Route path='/login-studen' element={<LoginE/>}/>
          <Route path='/login-teacher' element={<LoginT/>}/>
          <Route path='/registr' element={<Registro/>}/>
          <Route path='/MenuE' element={<MenuEstudiante/>}/>
          <Route path='/actividadesE' element={<ActividadesEstudiante/>}/>
          <Route path='/subirE' element={<SubirActividades/>}/>
          <Route path='/tutoriaE' element={<AsistenciaTutorias/>}/>
          <Route path='/MenuT' element={<MenuDocente/>}/>
          <Route path='/tutoriaT' element={<RegistroTutorias/>}/>
          <Route path='/vertutorias' element={<VerTutorias/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
