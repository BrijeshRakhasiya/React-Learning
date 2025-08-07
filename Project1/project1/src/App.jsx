import Home from './Home'
import About from './About'
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EventDemo from './EventDemo';
import Counter from './Counter';
import Sumdemo from './Sumdemo';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import Changepassword from './Changepassword';
import Profile from './Profile';
function App() {
  return (<>
    <h1>App</h1>
    <br/><br/><br/>
    <Router>
      <Link to='/home'>Home</Link>|
      <Link to='/about'>About</Link>|
      <Link to='/contact'>Contact</Link>|
      <Link to='/eventdemo'>EventDemo</Link>|
      <Link to='/counter'>Counter</Link>|
      <Link to='/sumdemo'>Sum</Link>|
      <Link to='/signup'>SignUp</Link>|
      <Link to='/login'>Login</Link>|
      <Link to='/dashboard'>Dashboard</Link>|
      <Link to='/changepassword'>Change Password</Link>|
      <Link to='/profile'>Profile</Link>|
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/eventdemo' element={<EventDemo />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/sumdemo' element={<Sumdemo />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/changepassword' element={<Changepassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cake/ahmedabad' element={<h1>Ahmedabad Cake </h1>} />
        <Route path='/cake/surat' element={<h1>Surat Cake</h1>} />
        <Route path='*' element={<h1>404 File Not Found</h1>} />
      </Routes>
    </Router>

  </>);
}

export default App;