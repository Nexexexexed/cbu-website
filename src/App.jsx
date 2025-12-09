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
    copyright: `© ООО «КЕЙС КОНСАЛТИНГ», ${new Date().getFullYear()}`,
  };

  // Стили для ссылок
  const linkStyle = {
    color: "#ffffff", // Белый цвет по умолчанию
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    transition: "color 0.3s ease",
    textDecoration: "none",
  };

  const linkHoverStyle = {
    color: "rgb(185, 235, 215)", // Цвет при наведении
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
          <Row gutter={[40, 40]}>
            {/* Колонка 1: О компании */}
            <Col xs={24} md={8}>
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    fontWeight: "700",
                    fontSize: "22px",
                    color: "#19be7d",
                    marginBottom: "8px",
                    lineHeight: "1.2",
                  }}
                >
                  {footerData.tagline}
                </div>
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "#b9ebd7",
                  }}
                >
                  {footerData.companyName}
                </div>
              </div>

              <Text
                style={{
                  color: "#8a9aa4",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                Профессиональное бухгалтерское и юридическое сопровождение
                бизнеса. Помогаем компаниям расти и развиваться с 2010 года.
              </Text>
            </Col>

            {/* Колонка 2: Услуги */}
            <Col xs={24} sm={12} md={8}>
              <Title
                level={4}
                style={{
                  color: "#ffffff",
                  marginBottom: "24px",
                  fontSize: "16px",
                }}
              >
                Услуги
              </Title>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {footerData.services.map((service, index) => (
                  <li key={index} style={{ marginBottom: "12px" }}>
                    <a
                      href="/services"
                      style={linkStyle}
                      onMouseEnter={(e) =>
                        (e.target.style.color = linkHoverStyle.color)
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = linkStyle.color)
                      }
                    >
                      <div
                        style={{
                          width: "4px",
                          height: "4px",
                          backgroundColor: "#19be7d",
                          borderRadius: "50%",
                          marginRight: "12px",
                          flexShrink: 0,
                        }}
                      />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Колонка 3: Информация и контакты */}
            <Col xs={24} sm={12} md={8}>
              <div style={{ marginBottom: "32px" }}>
                <Title
                  level={4}
                  style={{
                    color: "#ffffff",
                    marginBottom: "24px",
                    fontSize: "16px",
                  }}
                >
                  Информация
                </Title>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  {footerData.info.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      style={linkStyle}
                      onMouseEnter={(e) =>
                        (e.target.style.color = linkHoverStyle.color)
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color = linkStyle.color)
                      }
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              <Divider style={{ borderColor: "#2a3a46", margin: "24px 0" }} />

              <div>
                <Title
                  level={4}
                  style={{
                    color: "#ffffff",
                    marginBottom: "20px",
                    fontSize: "16px",
                  }}
                >
                  Контакты
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <PhoneOutlined
                      style={{
                        color: "#19be7d",
                        marginRight: "12px",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <a
                        href={`tel:${footerData.contact.phone.replace(
                          /\s/g,
                          ""
                        )}`}
                        style={linkStyle}
                        onMouseEnter={(e) =>
                          (e.target.style.color = linkHoverStyle.color)
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color = linkStyle.color)
                        }
                      >
                        {footerData.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <EnvironmentOutlined
                      style={{
                        color: "#19be7d",
                        marginRight: "12px",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <Text
                        style={{
                          color: "#ffffff",
                          fontSize: "14px",
                          display: "block",
                        }}
                      >
                        {footerData.contact.address}
                      </Text>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <MailOutlined
                      style={{
                        color: "#19be7d",
                        marginRight: "12px",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <a
                        href={`mailto:${footerData.contact.email}`}
                        style={linkStyle}
                        onMouseEnter={(e) =>
                          (e.target.style.color = linkHoverStyle.color)
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color = linkStyle.color)
                        }
                      >
                        {footerData.contact.email}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <ClockCircleOutlined
                      style={{
                        color: "#19be7d",
                        marginRight: "12px",
                        marginTop: "4px",
                      }}
                    />
                    <div>
                      <Text
                        style={{
                          color: "#ffffff",
                          fontSize: "14px",
                          display: "block",
                        }}
                      >
                        {footerData.contact.hours}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Divider style={{ borderColor: "#2a3a46", margin: "40px 0 30px" }} />

          {/* Кнопка заказа звонка и копирайт */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <Text style={{ color: "#8a9aa4", fontSize: "14px" }}>
              {footerData.copyright} Все права защищены
            </Text>

            <button
              style={{
                backgroundColor: "#19be7d",
                color: "#ffffff",
                border: "none",
                padding: "12px 32px",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "14px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(25, 190, 125, 0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#14a36b";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#19be7d";
                e.target.style.transform = "translateY(0)";
              }}
              onClick={() => (window.location.href = "/contacts")}
            >
              Заказать звонок
            </button>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default App;
