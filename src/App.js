import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Error from './components/Error'
import Navbar from './components/Navbar'
import User from './components/User';
import Filter from './components/Filter'
import Channel from './components/Channel';
import Company from './components/Company';
import Other from './components/Other';
import Login from './components/Login'
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Protected Component ={Home}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/about" element={<Protected Component ={About}/>}  />

          <Route path="user/:name" element={<User/>}/>
         
            <Route/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact/" element={<Protected Component ={Contact}/>} >
          <Route path="channel" element={<Channel/>}/>
          <Route path="company" element={<Company/>}/>
          <Route path="other" element={<Other/>}/>

          </Route>
          <Route path="/filter" element={<Filter/>} />
          <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
