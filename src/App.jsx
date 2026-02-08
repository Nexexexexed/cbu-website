import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ServicesPage from "./pages/ServicesPage"
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import PricingPage from "./pages/PricingPage";
import AccountingPage from "./pages/services/AccountingPage";
import LegalPage from "./pages/services/LegalPage";
import ManagementPage from "./pages/services/ManagementPage";
import OutsourcingPage from "./pages/services/OutsourcingPage";
import { Layout, Typography } from "antd";

const { Content, Footer } = Layout;
const { Text } = Typography;

// Компонент для автоматической прокрутки вверх при смене роута
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

function App() {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Если мы не на главной странице, то хедер всегда непрозрачный
    if (location.pathname !== "/") {
      setIsHeaderTransparent(false);
      return;
    }

    // Только на главной странице делаем логику прозрачности при скролле
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 50) {
        setIsHeaderTransparent(false);
      } else {
        setIsHeaderTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const footerData = {
    copyright: `© ИП «КЕЙС КОНСАЛТИНГ», ${new Date().getFullYear()}`,
  };

  return (
    <Layout className="app-layout">
      <ScrollToTop />
      <Header isTransparent={isHeaderTransparent} />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          
          {/* Отдельные страницы сервисов */}
          <Route path="/services/accounting" element={<AccountingPage />} />
          <Route path="/services/legal" element={<LegalPage />} />
          <Route path="/services/management" element={<ManagementPage />} />
          <Route path="/services/outsourcing" element={<OutsourcingPage />} />
          
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </Content>

      <Footer
        style={{
          backgroundColor: "#1a2a36",
          color: "#ffffff",
          padding: "60px 20px 30px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <Text style={{ color: "#8a9aa4", fontSize: "14px" }}>
              {footerData.copyright} Все права защищены
            </Text>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default App;