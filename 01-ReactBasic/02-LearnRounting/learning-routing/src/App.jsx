 import { BrowserRouter, Routes , Route, Link , useNavigate, Outlet } from 'react-router-dom';
import './App.css'
import { useEffect, useRef, useState } from 'react';






function App(){
  const [count,setCount] = useState(0);
  const timer = useRef();

  function handleStart(){
    let value = setInterval(function(){
      setCount(count =>count+1);

    },1000);
    timer.current = value;

  }

  function handleStop() {
    clearInterval(timer.current)
  }


  const inputRef = useRef();


  function handleRef(){
    inputRef.current.focus();
    console.log(inputRef.current.value());
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <label htmlFor="">Name</label><input ref={inputRef} type="text" name="" id="" />
      <label htmlFor="password">Password</label><input type="password" name='password' />
      <button onClick={handleRef}> Submit</button>
    </div>
  )
}
// function App() {

//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//         <Route path='/neet/online-11' element={<Class11Program />} />
//         <Route path='/neet/online-12' element={<Class12Program />} />
//         <Route path='/neet/online-10' element={<Class10Program />} />
//         <Route path='/' element={<Landing />} />
//         <Route path='*' element={<Error />} />
//         </Route>
//       </Routes>
//      </BrowserRouter>
//     </div>
//   );
// }
//lets make all the componets 


//defining the layout
function Layout(){
  return(
    <div style={{backgroundColor:'red', height: '100vh', width: '100vh'}}>
      <Header />
      <div style={{backgroundColor: 'yellow', height: '90vh'}}>
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

function Header(){
  return(
    <div>
      <Link to="/">HOME</Link> | <Link to="/neet/online-11">Class 11</Link>  | <Link to="/neet/online-12">Class12</Link>  | <Link to="/neet/online-10">Class 10 </Link> 
    </div>
  );
}
function Footer(){
  return (
    <div>
      This is Footer
    </div>
  )
}


function Error(){
  return(
    <div>
      <h1>404</h1>
    </div>
  )
}


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

  const navigate = useNavigate();


  useEffect(function(){
    setInterval(function(){
      navigate('/')
    },5000)
  },[navigate]);



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
