import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Layout   from   './Components/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Layout" element={<Layout />} /> 
         
      </Routes>
    </Router>
  );
}

export default App;





