import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import HomePage from "./pages/home-page/home-page";
import Footer from "./components/footer/footer";
import About from "./pages/about-page/about";
import ForParentsPage from "./pages/forParents-page/forParents-page";
import GalleryPage from "./pages/gallery-page/gallery-page";
import ContactsPage from "./pages/contacts-page/contacts-page";
import NewsPage from "./pages/news-page/news-page";
import ReseptionPage from "./pages/reseption-page/reseption-page";
import { IoLogoWhatsapp } from "react-icons/io";
import TeachingStaff from "./pages/teachingStaff/teachingStaff";
import Vacancy from "./pages/vacancy/vacancy";
import Volunteers from "./pages/volunteers/volunteers";
import Events from "./pages/events/events";
import Qualification from "./pages/qualification/qualification";
import Accreditation from "./pages/accreditation/accreditation";
import News from "./pages/news-page/news/news";
import Cooperation from "./pages/cooperation/cooperation";
import EducationalProcess from "./pages/educationalProcess/educationalProcess";
import AdditionalLessons from "./pages/additionalLessons/additionalLessons";
import Contingent from "./pages/contingent/contingent";
import Documents from "./pages/documents/documents";
import { useEffect, useState } from "react";
import { language } from "./language";

function App() {

  const location = useLocation()
  const [languages, setLanguages] = useState(localStorage.getItem('language') || 'kg');

  const handleLanguage = () => {
    const newLang = languages === 'kg' ? 'ru' : 'kg';
    setLanguages(newLang);
    localStorage.setItem('language', newLang);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToTop()
  }, [location])

  return (
    <div className="App">
      <Header
        data={language[languages]}
        handleLanguage={handleLanguage}
        languages={languages}
      />
      <div
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          zIndex: '1'
        }}
      >
        <NavLink target="_blank" to='https://wa.me/+996500500500'>
          <IoLogoWhatsapp
            style={{
              fontSize: '70px',
              color: 'green',
              border: '1px solid green',
            }}
          />
        </NavLink>
      </div>
      <Routes location={location}>
        <Route path="/" element={<HomePage data={language[languages]} />} />
        <Route path="/aboutUs" element={<About data={language[languages]} />} />
        <Route path="/news" element={<NewsPage data={language[languages]} />} />
        <Route path="/reception" element={<ReseptionPage data={language[languages]} />} />
        <Route path="/gallery" element={<GalleryPage data={language[languages]} />} />
        <Route path="/contacts" element={<ContactsPage />} data={language[languages]} />
        <Route path="/teachingStaff" element={<TeachingStaff data={language[languages]} />} />
        <Route path="/vacancy" element={<Vacancy data={language[languages]} />} />
        <Route path="/volunteers" element={<Volunteers data={language[languages]} />} />
        <Route path="/events" element={<Events data={language[languages]} />} />
        <Route path="/qualification" element={<Qualification data={language[languages]} />} />
        <Route path="/accreditation" element={<Accreditation data={language[languages]} />} />
        <Route path="/newsPage/:id" element={<News data={language[languages]} />} />
        <Route path="/cooperation" element={<Cooperation data={language[languages]} />} />
        <Route path="/educationalProcess" element={<EducationalProcess data={language[languages]} />} />
        <Route path="/additionalLessons" element={<AdditionalLessons data={language[languages]} />} />
        <Route path="/contingent" element={<Contingent data={language[languages]} />} />
        <Route path="/documents" element={<Documents data={language[languages]} />} />
      </Routes>
      <Footer data={language[languages]} />
    </div>
  );
}

export default App;
