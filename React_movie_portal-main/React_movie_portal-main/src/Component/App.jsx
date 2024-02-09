import './Styles.css';
import Movielist from "./Movielist"
import { AddMovie } from './AddMovie';
import {Routes,Route} from "react-router-dom"
import {Portal} from './Portal'
import Login from '../Login';
import Register from "./Register"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/portal' element={<Portal/>}>
          <Route path='movielist' element={<Movielist/>}/>
          <Route path='addmovie' element={<AddMovie/>}/>
        </Route>        
      </Routes>
    </div>
  );
}

export default App;