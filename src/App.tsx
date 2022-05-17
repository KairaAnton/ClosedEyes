import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';


function App() {
  return (
    <Routes> 
      <Route path='/' element={<Layout/>} >
        <Route element={<HomePage/>} index/>
        <Route path='*' element={<Navigate to='/'/>} />
      </Route>
    </Routes>
  );
}

export default App;
