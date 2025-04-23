
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './pages/Home';


import { Login } from './components/Auth/Login';

import { Contact } from './pages/Contact';
import { Signup } from './components/Auth/Signup';

import { RootState } from './store';
import { useSelector } from 'react-redux';
import BoardsPage from './components/Boards';
import StandardsPage from './components/Standards';
import SubjectsPage from './components/Subjects';
import ResourcesPage from './components/Resources';


function App() {
  const token = useSelector((state: RootState) => state.auth.token);
 
  return (
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/boards" element={<BoardsPage />} />
          <Route path="/boards/:boardId" element={<StandardsPage />} />
          <Route path="/standards/:standardId" element={<SubjectsPage />} />
          <Route path="/subjects/:subjectId/resources" element={<ResourcesPage />} />

      
        </Routes>
       
      </BrowserRouter>
  
  );
}

export default App;