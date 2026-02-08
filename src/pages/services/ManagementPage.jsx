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
  BarChartOutlined,
  PhoneOutlined,
  CheckOutlined,
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
    height: "56px",
    padding: "0 40px",
    fontWeight: 600,
    fontSize: "16px",
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

const ManagementPage = () => {
  const navigate = useNavigate();
  const serviceColor = "#19be7d";

  const mainServices = [
    "Разработка системы финансового учета",
    "Создание бюджета компании на период по запросу",
    "Создание формы движения денежных средств на период по запросу",
    "Платежный календарь на период по запросу",
    "Расчет себестоимости, наценки",
    "Расчет показателей маржинальной, операционной прибыли, чистой прибыли",
    "Расчет среднего чека",
    "Расчет точки безубыточности",
    "Финансовое моделирование",
    "Управление рисками",
    "Рекомендации по управлению ресурсами и запасами",
    "Оценка эффективности работы структуры бизнеса и ее подразделений",
    "Разработка системы мотивации персонала",
    "Настройка бизнес-процессов",
    "Создание управленческих регламентов",
  ];

  const sections = [
    {
      title: "Основные услуги",
      items: mainServices,
    },
  ];

  return (
    <div style={{ padding: "40px 20px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{height:"60px"}}></div>

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
              padding: "60px 40px",
              textAlign: "center",
              color: "white",
            }}
          >
            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 30px",
                }}
              >
                <BarChartOutlined style={{ fontSize: "48px", color: "white" }} />
              </div>
              
              <Title level={1} style={{ color: "white", marginBottom: "20px" }}>
                Управленческая отчетность
              </Title>
              
              <Paragraph style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.9)", maxWidth: "800px", margin: "0 auto" }}>
                Финансовый анализ и стратегическое планирование для роста вашего бизнеса
              </Paragraph>
            </Motion.div>
          </div>

          <div style={{ padding: "60px 40px" }}>
            {sections.map((section, sectionIndex) => (
              <Motion.div 
                key={sectionIndex} 
                variants={fadeInUp} 
                initial="initial" 
                animate="animate"
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <div style={{ marginBottom: "30px" }}>
                  <Title level={3} style={{ color: serviceColor, marginBottom: "40px", textAlign: "center" }}>
                    {section.title}
                  </Title>
                  
                  <Row gutter={[24, 24]}>
                    {section.items.map((item, itemIndex) => (
                      <Col xs={24} sm={12} key={itemIndex}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "15px",
                            padding: "20px",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "12px",
                            minHeight: "100px",
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
                          <Paragraph style={{ margin: 0, fontSize: "16px", lineHeight: 1.6 }}>{item}</Paragraph>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Motion.div>
            ))}

            <Motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Divider style={{ margin: "60px 0" }} />
              
              <div
                style={{
                  backgroundColor: "#f0faf5",
                  borderRadius: "20px",
                  padding: "50px",
                  textAlign: "center",
                  border: `2px solid ${serviceColor}40`,
                }}
              >
                <Title level={3} style={{ marginBottom: "20px", color: "#000" }}>
                  Результаты для бизнеса
                </Title>
                
                <Row gutter={[32, 32]} style={{ marginTop: "40px" }}>
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "40px", fontWeight: "bold", color: serviceColor }}>30%</div>
                      <Paragraph style={{ fontWeight: 500 }}>Снижение затрат в среднем</Paragraph>
                    </div>
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "40px", fontWeight: "bold", color: serviceColor }}>25%</div>
                      <Paragraph style={{ fontWeight: 500 }}>Рост прибыли клиентов</Paragraph>
                    </div>
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: "40px", fontWeight: "bold", color: serviceColor }}>100%</div>
                      <Paragraph style={{ fontWeight: 500 }}>Контроль финансов</Paragraph>
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
                  padding: "60px 40px",
                  textAlign: "center",
                  marginTop: "60px",
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
                  <Title level={2} style={{ color: "white", marginBottom: "20px" }}>
                    Хотите видеть реальную картину бизнеса?
                  </Title>
                  
                  <Paragraph style={{ fontSize: "18px", marginBottom: "40px", opacity: 0.9 }}>
                    Внедрите управленческий учет и получите полный контроль над финансами
                  </Paragraph>
                  
                  <Space size="large" wrap style={{ justifyContent: "center" }}>
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
                      fontSize: "14px", 
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

export default ManagementPage;