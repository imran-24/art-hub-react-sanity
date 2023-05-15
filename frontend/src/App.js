import {
  Route,
  Routes
} from "react-router-dom";
import Join from "./Components/Join";
import Login from "./Components/Login";
import Home from "./Container/Home";
import Posts from "./Container/Posts";


function App() {
  return (
    <div className="app">
      
      
        
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/join' element={<Join />} />
            <Route path='/*' element={<Home />} />
            
            {/* <Route path="/categories" element={<Home />} /> */}
        </Routes>

      </div>
    
  );
}

export default App;
