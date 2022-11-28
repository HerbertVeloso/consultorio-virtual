import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Routes } from './Routes';

import { Header } from './components/Header';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <GlobalStyle />
          <ToastContainer autoClose={3000} />

          <Header />
          <Routes />

        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
