 import { BrowserRouter, Routes , Route, Link} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Link to="/">HOME</Link> | <Link to="/neet/online-11">Class 11</Link>  | <Link to="/neet/online-12">Class12</Link>  | <Link to="/neet/online-10">Class 10 </Link> 
      <Routes>
        <Route path='/neet/online-11' element={<Class11Program />} />
        <Route path='/neet/online-12' element={<Class12Program />} />
        <Route path='/neet/online-10' element={<Class10Program />} />
        <Route path='/' element={<Landing />} />
      </Routes>
     </BrowserRouter>
    </div>
  )
}
//lets make all the componets 
function Landing() {
  return (
    <div>
      <h1>This is Landing Page</h1>
    </div>
  )
}

function Class11Program() {
  return (
    <div>
      <h1>Class 11 Program</h1>
    </div>
  );
}

function Class12Program() {
  return(
    <div>
      <h1>Class 12 Program</h1>
    </div>
  );
}

function Class10Program() {

  return (
    <div>
      <h1>Class 10 Program</h1>
    </div>
  );
}





export default App
