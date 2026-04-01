import React from "react";
import {
  Card,
  Typography,
  Row,
  Col,
  Divider,
  Space,
} from "antd";
import {
  FileTextOutlined,
  PhoneOutlined,
  CheckOutlined,
  BuildOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Кастомная кнопка для CTA секции
const CustomCTAButton = ({ 
  children, 
  onClick, 
  variant = "primary", 
  icon, 
  style = {} 
}) => {
  const serviceColor = "#19be7d";
  
  const baseStyles = {
    height: "clamp(48px, 8vw, 56px)",
    padding: "0 clamp(20px, 5vw, 40px)",
    fontWeight: 600,
    fontSize: "clamp(14px, 4vw, 16px)",
    borderRadius: "8px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  const primaryStyles = {
    ...baseStyles,
    backgroundColor: "white",
    color: serviceColor,
    border: `2px solid white`,
  };

  const secondaryStyles = {
    ...baseStyles,
    backgroundColor: "transparent",
    color: "white",
    border: `2px solid white`,
  };

  const hoverStyles = {
    primary: {
      backgroundColor: "#14a36b",
      borderColor: "#14a36b",
      color: "white",
      transform: "translateY(-2px)",
      boxShadow: `0 8px 25px rgba(20, 163, 107, 0.3)`,
    },
    secondary: {
      backgroundColor: "white",
      borderColor: "white",
      color: serviceColor,
      transform: "translateY(-2px)",
      boxShadow: `0 8px 25px rgba(255, 255, 255, 0.2)`,
    },
  };

  const buttonStyles = variant === "primary" ? primaryStyles : secondaryStyles;

  return (
    <Motion.button
      style={{ ...buttonStyles, ...style }}
      whileHover={hoverStyles[variant]}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {icon}
      {children}
    </Motion.button>
  );
};

const LegalPage = () => {
  const navigate = useNavigate();
  const serviceColor = "#19be7d";

  const businessServices = [
    "Регистрация юридических лиц и ИП",
    "Внесение изменений в учредительные документы",
    "Оформление выхода участников и продажи долей",
    "Правовая экспертиза договоров и дополнительных соглашений",
    "Составление протоколов разногласий",
    "Досудебная претензионная работа",
    "Взыскание проблемной дебиторской задолженности",
    "Составление исковых заявлений, апелляционных жалоб, возражений",
    "Ведение исполнительных производств",
    "Представительство в арбитражных судах",
    "Апелляционное и кассационное сопровождение",
    "Сопровождение процедур банкротства юридических лиц",
  ];

  const personalServices = [
    "Консультации в области гражданского и административного права",
    "Трудовые споры",
    "Сопровождение сделок с коммерческой и жилой недвижимостью",
    "Представление интересов в судах общей юрисдикции",
  ];

  return (
    <div style={{ padding: "clamp(20px, 5vw, 40px) clamp(16px, 4vw, 20px)", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ height: "clamp(50px, 10vw, 60px)" }}></div>

        <Card
          style={{
            borderRadius: "20px",
            border: "none",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: `linear-gradient(135deg, ${serviceColor} 0%, #14a36b 100%)`,
              padding: "clamp(40px, 8vw, 60px) clamp(20px, 5vw, 40px)",
              textAlign: "center",
              color: "white",
              borderRadius: "20px",
            }}
          >
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <div
                style={{
                  width: "clamp(70px, 15vw, 100px)",
                  height: "clamp(70px, 15vw, 100px)",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto clamp(20px, 5vw, 30px)",
                }}
              >
                <FileTextOutlined style={{ fontSize: "clamp(32px, 8vw, 48px)", color: "white" }} />
              </div>
              
              <Title level={1} style={{ color: "white", marginBottom: "20px", fontSize: "clamp(1.5rem, 6vw, 2.5rem)" }}>
                Юридическое сопровождение
              </Title>
              
              <Paragraph style={{ fontSize: "clamp(14px, 4vw, 20px)", color: "rgba(255, 255, 255, 0.9)", maxWidth: "800px", margin: "0 auto" }}>
                Правовая защита и консультации для вашего бизнеса. Защитим ваши интересы в любой ситуации.
              </Paragraph>
            </Motion.div>
          </div>

          <div style={{ padding: "clamp(30px, 6vw, 60px) clamp(20px, 5vw, 40px)" }}>

            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Title level={2} style={{ textAlign: "center", marginBottom: "clamp(30px, 6vw, 50px)", color: serviceColor, fontSize: "clamp(1.3rem, 5vw, 2rem)" }}>
                Основные услуги
              </Title>
              
              {/* Для бизнеса */}
              <div style={{ marginBottom: "clamp(40px, 8vw, 60px)" }}>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "15px", 
                  marginBottom: "clamp(20px, 5vw, 30px)",
                  flexWrap: "wrap",
                }}>
                  <BuildOutlined style={{ fontSize: "clamp(24px, 6vw, 32px)", color: serviceColor }} />
                  <Title level={3} style={{ margin: 0, color: serviceColor, fontSize: "clamp(1.2rem, 5vw, 1.5rem)" }}>
                    Для бизнеса
                  </Title>
                </div>
                
                <Row gutter={[24, 24]}>
                  {businessServices.map((service, index) => (
                    <Col xs={24} sm={12} key={index}>
                      {/* Зеленый фон-подложка */}
                      <div
                        style={{
                          backgroundColor: serviceColor,
                          borderRadius: "12px",
                          padding: "0 0 0 8px",
                        }}
                      >
                        {/* Серый блок, сдвинутый вправо */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "15px",
                            padding: "clamp(16px, 4vw, 20px)",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "10px",
                            minHeight: "clamp(80px, 15vw, 100px)",
                            transform: "translateX(4px)",
                          }}
                        >
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              backgroundColor: serviceColor,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: "4px",
                            }}
                          >
                            <CheckOutlined style={{ color: "white", fontSize: "12px", fontWeight: "bold" }} />
                          </div>
                          <Paragraph style={{ margin: 0, fontSize: "clamp(14px, 3.5vw, 16px)", lineHeight: 1.6, flex: 1 }}>
                            {service}
                          </Paragraph>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Для физических лиц */}
              <div>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "15px", 
                  marginBottom: "clamp(20px, 5vw, 30px)",
                  flexWrap: "wrap",
                }}>
                  <UserOutlined style={{ fontSize: "clamp(24px, 6vw, 32px)", color: serviceColor }} />
                  <Title level={3} style={{ margin: 0, color: serviceColor, fontSize: "clamp(1.2rem, 5vw, 1.5rem)" }}>
                    Для физических лиц
                  </Title>
                </div>
                
                <Row gutter={[24, 24]}>
                  {personalServices.map((service, index) => (
                    <Col xs={24} sm={12} key={index}>
                      {/* Зеленый фон-подложка */}
                      <div
                        style={{
                          backgroundColor: serviceColor,
                          borderRadius: "12px",
                          padding: "0 0 0 8px",
                        }}
                      >
                        {/* Серый блок, сдвинутый вправо */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "15px",
                            padding: "clamp(16px, 4vw, 20px)",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "10px",
                            minHeight: "clamp(80px, 15vw, 100px)",
                            transform: "translateX(4px)",
                          }}
                        >
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              backgroundColor: serviceColor,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: "4px",
                            }}
                          >
                            <CheckOutlined style={{ color: "white", fontSize: "12px", fontWeight: "bold" }} />
                          </div>
                          <Paragraph style={{ margin: 0, fontSize: "clamp(14px, 3.5vw, 16px)", lineHeight: 1.6, flex: 1 }}>
                            {service}
                          </Paragraph>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Motion.div>

            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Divider style={{ margin: "clamp(40px, 8vw, 60px) 0" }} />
              
              <div
                style={{
                  backgroundColor: "#f0faf5",
                  borderRadius: "20px",
                  padding: "clamp(30px, 6vw, 50px) clamp(20px, 5vw, 40px)",
                  textAlign: "center",
                  border: `2px solid ${serviceColor}40`,
                }}
              >
                <Title level={3} style={{ marginBottom: "20px", color: "#000", fontSize: "clamp(1.2rem, 5vw, 1.8rem)" }}>
                  Наши преимущества
                </Title>
                
                <Row gutter={[32, 32]} style={{ marginTop: "40px" }}>         
                  <Col xs={24} md={12}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "clamp(32px, 8vw, 40px)", fontWeight: "bold", color: serviceColor }}>15+</div>
                      <Paragraph style={{ fontWeight: 500, fontSize: "clamp(14px, 3.5vw, 16px)" }}>Лет практики</Paragraph>
                    </div>
                  </Col>
                  
                  <Col xs={24} md={12}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "clamp(32px, 8vw, 40px)", fontWeight: "bold", color: serviceColor }}>24/7</div>
                      <Paragraph style={{ fontWeight: 500, fontSize: "clamp(14px, 3.5vw, 16px)" }}>Юридическая поддержка</Paragraph>
                    </div>
                  </Col>
                </Row>
              </div>
            </Motion.div>

            {/* CTA Section */}
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <div
                style={{
                  backgroundColor: serviceColor,
                  borderRadius: "20px",
                  padding: "clamp(40px, 8vw, 60px) clamp(20px, 5vw, 40px)",
                  textAlign: "center",
                  marginTop: "clamp(40px, 8vw, 60px)",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Декоративные элементы */}
                <div
                  style={{
                    position: "absolute",
                    top: "-50px",
                    right: "-50px",
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-30px",
                    left: "-30px",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                />
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  <Title level={2} style={{ color: "white", marginBottom: "20px", fontSize: "clamp(1.3rem, 5vw, 2rem)" }}>
                    Нужна юридическая защита бизнеса?
                  </Title>
                  
                  <Paragraph style={{ fontSize: "clamp(14px, 4vw, 18px)", marginBottom: "clamp(30px, 6vw, 40px)", opacity: 0.9, padding: "0 16px" }}>
                    Закажите консультацию юриста и получите план защиты ваших интересов
                  </Paragraph>
                  
                  <Space 
                    size="middle" 
                    wrap 
                    style={{ 
                      justifyContent: "center", 
                      display: "flex",
                      gap: "clamp(12px, 3vw, 20px)",
                    }}
                  >
                    <CustomCTAButton
                      variant="primary"
                      onClick={() => navigate("/contacts")}
                      icon={<PhoneOutlined />}
                    >
                      Получить консультацию
                    </CustomCTAButton>
                    
                    <CustomCTAButton
                      variant="secondary"
                      onClick={() => navigate("/pricing")}
                    >
                      Узнать цены
                    </CustomCTAButton>
                  </Space>
                  
                  <Paragraph 
                    style={{ 
                      fontSize: "clamp(12px, 3.5vw, 14px)", 
                      marginTop: "24px", 
                      opacity: 0.8,
                      fontStyle: "italic"
                    }}
                  >
                    Первая консультация — бесплатно
                  </Paragraph>
                </div>
              </div>
            </Motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LegalPage;