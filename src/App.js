import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import FarmersLanding from './component/FarmersLanding';
import ConsumerLanding from './component/ConsumerLanding';
import { ToastContainer } from 'react-toastify';
import Homepage from './component/Homepage';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path=''  element={<Homepage />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/farmer-Dash' element={<FarmersLanding />}></Route>
        <Route path='/consumer-Dash' element={<ConsumerLanding />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
