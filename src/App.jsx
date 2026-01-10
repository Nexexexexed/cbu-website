import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import PricingPage from "./pages/PricingPage";
import { Layout, Row, Col, Typography, Divider } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Content, Footer } = Layout;
const { Text, Title, Link } = Typography;

function App() {
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  useEffect(() => {
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
  }, []);

  // Данные для футера - адаптированы под ваш сайт
  const footerData = {
    companyName: "КЕЙС КОНСАЛТИНГ",
    tagline: "ЦЕНТР БУХГАЛТЕРСКИХ УСЛУГ",
    services: [
      "Бухгалтерское обслуживание",
      "Юридическое сопровождение",
      "Управленческая отчетность",
      "Аутсорсинг бизнес-процессов",
      "Страхование",
      "Подбор персонала (с 01.01.2026)",
    ],
    info: [
      "О нас",
      "Кейсы",
      "Цены",
      "Контакты",
      "Отзывы клиентов",
      "Политика конфиденциальности",
    ],
    contact: {
      phone: "8 (800) 123-45-67",
      address: "Москва, ул. Примерная, д. 10, офис 25",
      email: "info@case-consulting.ru",
      hours: "Пн-Пт: 9:00-18:00",
    },
    copyright: `© ИП «КЕЙС КОНСАЛТИНГ», ${new Date().getFullYear()}`,
  };

  return (
    <Layout className="app-layout">
      <Header isTransparent={isHeaderTransparent} />

      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
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
