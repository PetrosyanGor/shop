import {Routes, Route} from 'react-router-dom';

import Header from './components/header/';
import Footer from './components/footer/';
import HomePage from './pages/home/';
import AboutPage from './pages/about/';
import ContactPage from './pages/contact/';
import CategoryPage from './pages/category/CategoryPage';
import NotFoundPage from './pages/notFound';
import DetailPage from './pages/DetailPage';


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/category/:name' element={<CategoryPage />} />
        <Route path='/meal/:id' element={<DetailPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App