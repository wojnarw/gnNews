import { Route, Routes } from 'react-router-dom';
import MainContent from './layout/MainContent';
import Header from './components/Header';
import classes from './styles/Layout.module.css';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import MiddlePanel from './components/MiddlePanel';
import NoSuchPage from './layout/NoSuchPage';

function App() {
  return (
    <div className={classes.main}>
      <Header />
      <MiddlePanel>
        <SideBar />
        <Routes>
          <Route path="/" element={<MainContent countryCode="us" />} />
          <Route path="/country/:countryCode" element={<MainContent />} />
          <Route path="*" element={<NoSuchPage />} />
        </Routes>
      </MiddlePanel>
      <Footer />
    </div>
  );
}

export default App;
