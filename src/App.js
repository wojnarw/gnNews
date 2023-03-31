import { Route, Routes } from 'react-router-dom';
import MainContent from './layout/MainContent';
import TopArticles from './layout/TopArticles';
import PageHeader from './components/PageHeader';
import classes from './styles/Layout.module.css';
import SinglePost from './layout/SinglePost';
import AuthorPage from './layout/AuthorPage';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import MiddlePanel from './components/MiddlePanel';
import NoSuchPage from './layout/NoSuchPage';

function App() {
  return (
    <div className={classes.main}>
      <PageHeader />
      <MiddlePanel>
        <SideBar />
        <Routes>
          <Route path="/" element={<MainContent countryCode="us" />} />
          <Route path="/top" element={<TopArticles />} />
          <Route path="/post/:id" element={<SinglePost />} />
          <Route path="/site/:siteName" element={<AuthorPage />} />
          <Route path="/country/:countryCode" element={<MainContent />} />
          <Route path="*" element={<NoSuchPage />} />
        </Routes>
      </MiddlePanel>
      <Footer />
    </div>
  );
}

export default App;
