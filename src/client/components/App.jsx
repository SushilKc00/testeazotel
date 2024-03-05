import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { BsArrowUpCircle } from "react-icons/bs";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import OtaPage from "./OtaForm.jsx";
import OtpPage from "./OtpPage";
import Test from "./Test";
import "../static/style/App.css";
import Aboutus from "./Aboutus";
import BookingEngine from "./BookingEngine";
import CongratsModal from "./CongratulationModal";
import CreateWebsite from "./CreateWebsite";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Form from "./Form";
import Home from "./Home";
import LoginEazotel from "./LoginEazotel";
import Navbar from "./Navbar";
import OurWork from "./OurWork.jsx";
import PrivacyPolicy from "./PrivacyPolicy";
import Registration from "./Registration";
import ResetPassword from "./ResetPassword";
import SocialMedia from "./SocialMedia";
import Team from "./Team";
import TermsCondition from "./TermsCondition";
import AuthContext from "../context/AuthProvider.js";
import Template from "../pages/Template.jsx";
import "../static/style/Main.css";



function App() {
  // Context-> Auth Provider.js
  const { auth, setAuth, setHaveDashboardPassword,setClientWebsite,setClientengine } =
    useContext(AuthContext);
  const location = useLocation();

  // if (!process.env.BROWSER) {
  //   global.window = {}; // Temporarily define window for server-side
  // }

  async function CheckDashboardAPI() {
    const dashboard = await fetch(
      `https://eazotel.eazotel.com/api/getDashboardStatus?id=${localStorage.getItem('Token')}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      }
    );
    const nav = await dashboard.json();
    if (nav.Status) {
      setAuth(true)
      setHaveDashboardPassword(true);
      setClientWebsite(nav.Data.websiteLink)
      setClientengine(nav.Data.bookingEngineLink)
    }
  }
  useEffect(() => {
    if (
      localStorage.getItem("Token") !== null ||
      sessionStorage.getItem("Token") !== null
    ) {
      CheckDashboardAPI();
      setAuth(true);
    }
  }, [auth, setAuth]);

  const handleOnClick = () => {
    window.scrollTo(0, 0);
  };
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return {
          title: "Best Hotel Booking & Hospitality Management Software | Eazotel",
          description:
            "Eazotel is a leading Hotel Booking & Hospitality Management Software. We simplify hotel operations with website building, review management, SEO, and SMO of the website. ",
        };
      case '/about':
        return {
          title: 'Eazotel | About',
          description: 'Description for the About page.',
        };
      case '/login':
        return {
          title: 'Eazotel | Login',
          description: 'Description for the Login page.',
        };
      case '/signup':
        return {
          title: 'Eazotel | Signup',
          description: 'Description for the Signup page.',
        };
      case '/services':
        return {
          title: 'Eazotel | Services',
          description: 'Description for the Services page.',
        };
      case '/contact':
        return {
          title: 'Eazotel | Contact',
          description: 'Description for the Contact page.',
        };

      case '/resetpassword':
        return {
          title: 'Eazotel | Reset Password',
          description: 'Description for the Reset Password page.',
        };
      case "/createwebsite":
        return {
          title:
            "Hotel Website Builder | Hotel Website Development Agency - Eazotel",
          description:
            "Eazotel is a leading hotel website development company & builds stunning websites including small hotels, enterprise hotel websites,s and many more. Visit us!",
        };
      case "/socialmedia":
        return {
          title:
            "Eazotel - Affordable Social Media Marketing for Your Hotels",
          description:
            "Boost your hotel's online presence with Eazoteland to engage the audience through effective hotel social media marketing. Enhance brand visibility and bookings.",
        };
      default:
        return "Eazotel";
    }
  };

  return (
    <>
      <Helmet>
        <title>{getPageTitle().title}</title>
        <meta name="description" content={getPageTitle().description} />
      </Helmet>
      <>
        {location.pathname !== "/login" && location.pathname !== "/signup" && (
          <Navbar />
        )}
      </>
      <></>
      <Routes element={<Outlet />}>
        <Route path="/" element={<Home />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verification" element={<OtpPage />} />
        <Route path="/generatewebsite" element={<Test />} />
        <Route path="/ready" element={<CongratsModal />} />
        <Route path="/login" element={<LoginEazotel />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/create-hotel-website" element={<CreateWebsite />} />
        <Route path="/booking-engine" element={<BookingEngine />} />
        <Route path="/social-media-manager" element={<SocialMedia />} />
        <Route path="/demo" element={<Form />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/templates" element={<Template />} />
        <Route path="/dashboard" element={<Dashboard />} />


        {/* Saurabh Routes */}
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms&condition" element={<TermsCondition />} />
        <Route path="/our-work" element={<OurWork />}/>
        <Route path="/team" element={<Team/>} />

        <Route path="/ota" element={<OtaPage />} /> 
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
      {/* <BsArrowUpCircle
        size={500}
        style={{
          position: "fixed",
          bottom: "2rem",
          left: "1rem",
          width: "40px",
          height: "40px",
          zIndex: "999",
          color: "#FD5C01",
        }}
        onClick={handleOnClick}
      /> */}
    </>
  );
}

export default App;
