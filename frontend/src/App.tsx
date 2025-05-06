import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings'; // ✅

function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuth = !!localStorage.getItem('userName');
  return isAuth ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />
        <Route path="/profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        } />
        <Route path="/settings" element={ // ✅
          <RequireAuth>
            <Settings />
          </RequireAuth>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
